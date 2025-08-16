import { Injectable } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class TicketService {

    // create default redis
    private redis = new Redis()

    // key follow status user
    private onlineKey = (userId: string) => `user:${userId}:status`
    private lastSeenKey = (userId: string) => `user:${userId}:lastSeen`

    async setOnline(userId: string) {
        await this.redis.set(this.onlineKey(userId), 'online')
        await this.redis.set(this.lastSeenKey(userId), Date.now().toString())
    }

    async setOffline(userId: string) {
        await this.redis.set(this.onlineKey(userId), 'offline')
        await this.redis.set(this.lastSeenKey(userId), Date.now().toString())
    }

    async getStatususer(userId: string) {
        return await this.redis.get(this.onlineKey(userId))
    }

}