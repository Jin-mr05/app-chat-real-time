import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from 'cache-manager';
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/custom-cache.service";
@Injectable()
export class ChatService {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly cacheCustomService: CustomCacheService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

    // update last read message
    async updateLastReadMessage(lastestMessageId: number, req: Request) {

        // find user 
        const exitedUser = await this.prismaService.readProgram.findFirst({
            where: { userId: req.user?.id }
        })

        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // find lastest message
        const lastestMessage = await this.prismaService.readProgram.findUnique({
            where: { userId: req.user?.id }
        })

        if (!lastestMessage) {
            throw new NotFoundException('message not found')
        }

        const pastLastestMessage = lastestMessage.lastestMessgaId

        // update lastest message
        await this.prismaService.readProgram.update({
            where: { id: exitedUser.id },
            data: { lastestMessgaId: lastestMessageId }
        })

        // find message
        const messageCache = await this.prismaService.message.findMany({
            where: {
                id: {
                    gte: pastLastestMessage ?? 0,
                    lte: lastestMessageId
                }
            },
            orderBy: {
                id: 'asc'
            }
        })

        // cache message
        for (let i = pastLastestMessage ?? 0; i <= lastestMessageId; i++) {
            const key = `cache-message${exitedUser.id} + ${i}`

            await this.cacheCustomService.getOrSet(key, async () => {
                messageCache.find(message => message.id === i)
            })
        }
    }

    // loading all message 
    async loadingAllMessage(req: Request) {
        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // find lastest message
        const lastestMessage = await this.prismaService.readProgram.findUnique({
            where: { userId: req.user?.id },
            select: { lastestMessgaId: true }
        })

        // find message
        let messageCache: any[] = []

        if (lastestMessage?.lastestMessgaId == 0) {
            throw new NotFoundException('no conversation yet')
        }

        // loading message
        for (let i = 0; i <= (lastestMessage?.lastestMessgaId || 0); i++) {
            const key = `cache-message${exitedUser.id} + ${i}`
            const message = await this.cacheManager.get(key)

            if (message) {
                messageCache.push(message)
            }

        }
        return messageCache
    }

    // edit message
    async editMessage(req: Request, messageId: number, newContent: string) {
        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // find message
        const exitedMessage = await this.prismaService.message.findUnique({
            where: { id: messageId }
        })

        if (!messageId) {
            throw new NotFoundException('message not found')
        }

        if (exitedMessage?.userId !== exitedUser.id) {
            throw new NotFoundException('you are not the author of the message')
        }

        // update new message
        const newMessage = await this.prismaService.message.update({
            where: { id: messageId },
            data: { content: newContent }
        })

        // change cache 
        if (!newMessage.addressId) {
            // find cache 
            const key = `room:private:${exitedUser.id}_${exitedMessage.addressId}`

            const cacheMessage = await this.cacheManager.get(key)

            if (cacheMessage) {
                await this.cacheManager.del(key)
            } else {
                await this.cacheManager.set(key, newMessage)
            }
        } else {
            // find cache
            const key = exitedMessage.roomId

            if (!key) {
                throw new NotFoundException('room not found')
            }

            const cacheMessage = await this.cacheManager.get(key)

            if (cacheMessage) {
                await this.cacheManager.del(key)
            } else {
                await this.cacheManager.set(key, newMessage)
            }
        }

        return newMessage
    }

    // delete messgae
    async deleteMessage(req: Request, messageId: number) {
        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // find message
        const exitedMessage = await this.prismaService.message.findUnique({
            where: { id: messageId }
        })

        if (!messageId) {
            throw new NotFoundException('message not found')
        }

        if (exitedMessage?.userId !== exitedUser.id) {
            throw new NotFoundException('you are not the author of the message')
        }

        // delete message
        await this.prismaService.message.delete({
            where: { id: messageId }
        })

        // delete cache 
        const key = `cache-message${exitedUser.id} + ${messageId}`

        const cached = await this.cacheManager.get(key)

        if(cached) {
            await this.cacheManager.del(key)
        }
    }
}