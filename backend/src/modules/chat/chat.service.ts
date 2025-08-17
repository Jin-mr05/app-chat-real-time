import { Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ChatService {
    private redis: Redis

    constructor(private readonly prismaService: PrismaService) {
        this.redis = new Redis() // connect redis
    }

    // set userOnline
    async setUserOnline(userId: string, isOnline: boolean) {
        await this.redis.hset('user_status', userId, isOnline ? 'online' : 'offline')
    }

    async getUserStatus(userId: string) {
        return this.redis.hget('user_status', userId)
    }

    // create message
    async createMessage(userId: string, roomId: string, content: string) {
        const message = await this.prismaService.message.create({
            data: {
                content,
                userId: userId,
                roomId: roomId
            }
        })

        // publish event for scaling
        await this.redis.publish('chat_channel', JSON.stringify(message))

        return message
    }

    // loading message
    async loadingMessage(roomId: string, params: { cursor?: string, limit?: number, direction?: 'next' | 'prev' }) {
        const { cursor, limit = 20, direction = 'next' } = params

        const messages = await this.prismaService.message.findMany({
            where: { roomId },
            orderBy: { createAt: 'desc' },
            take: direction === 'next' ? limit: -limit,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: parseInt(cursor) } : undefined
        })

        const hasMore = messages.length === limit
        const nextCursor = messages.length > 0 ? messages[messages.length - 1].id : null
        const prevCursor = messages.length > 0 ? messages[0].id : null

        return {
            item: messages,
            nextCursor,
            prevCursor,
            hasMore
        }
    }
}