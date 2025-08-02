import { Injectable } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class TicketService {

    // create default redis
    private redis = new Redis()

    // key follow status user
    private onlineLey = (userId: string) => `user:${userId}:status`
    private lastSeenKey = (userId: string) => `user:${userId}:lastSeen`

    async setOnline(userId: string) {
        await this.redis.set(this.onlineLey(userId), 'online')
        await this.redis.set(this.lastSeenKey(userId), Date.now().toString())
    }

    async setOffline(userId: string) {
        await this.redis.set(this.onlineLey(userId), 'offline')
        await this.redis.set(this.lastSeenKey(userId), Date.now().toString())
    }

}