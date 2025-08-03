import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from 'cache-manager';
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/custom-cache.service";
import { PaginationDto } from "./dto/pagination.dto";
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
    async loadingAllMessage(req: Request, pagination: PaginationDto) {
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
    
        if (lastestMessage?.lastestMessgaId == 0) {
            throw new NotFoundException('no conversation yet')
        }
    
        // Calculate skip and take for pagination
        const skip = (pagination.page - 1) * pagination.limit;
        const take = pagination.limit;
    
        // Get total count for pagination metadata
        const totalMessages = lastestMessage?.lastestMessgaId || 0;
        const totalPages = Math.ceil(totalMessages / pagination.limit);
    
        // Calculate range of messages to load
        const startId = pagination.sort === 'desc' 
            ? Math.max(1, totalMessages - skip - take + 1)
            : skip + 1;
        const endId = pagination.sort === 'desc'
            ? totalMessages - skip
            : Math.min(skip + take, totalMessages);
    
        let messageCache: any[] = [];
    
        // Load messages in range
        for (let i = startId; i <= endId; i++) {
            const key = `cache-message${exitedUser.id} + ${i}`;
            const message = await this.cacheManager.get(key);
    
            if (message) {
                messageCache.push(message);
            }
        }
    
        // Sort messages based on preference
        if (pagination.sort === 'desc') {
            messageCache = messageCache.reverse();
        }
    
        return {
            data: messageCache,
            metadata: {
                page: pagination.page,
                limit: pagination.limit,
                totalPages,
                totalItems: totalMessages,
                hasNextPage: pagination.page < totalPages,
                hasPreviousPage: pagination.page > 1
            }
        }
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

        if (cached) {
            await this.cacheManager.del(key)
        }
    }
}