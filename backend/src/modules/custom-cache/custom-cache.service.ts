import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { AUTH_CONSTANTS } from "../auth/auth.constants";

@Injectable()
export class CustomCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService
    ) { }

    // user

    // find user by email in cache
    async getUserByEmailInCache(email: string): Promise<User | null> {
        if (!email) return null;

        const key = `account-email:${email}`;
        const cached = await this.cacheManager.get(key) as User;

        if (cached) return cached;

        // fallback to database
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            await this.cacheManager.set(key, existingUser, AUTH_CONSTANTS.MAX_AGE_CACHE)
        }

        return existingUser;
    }

    // find user by id in cache
    async getUserByIdInCache(userId: string): Promise<User | null> {
        if (!userId || userId === 'unknow') return null;

        const key = `account:${userId}`
        const cached = await this.cacheManager.get(key) as User

        if (cached) return cached

        // fallback to database
        const existingUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        if (existingUser) {
            await this.cacheManager.set(key, existingUser, AUTH_CONSTANTS.MAX_AGE_CACHE)
        }

        return existingUser
    }

    // update cache user
    async updateUserCache(userId: string, user: User) {
        const key = `account:${userId}`
        await this.cacheManager.del(key)
        await this.cacheManager.set(key, user, AUTH_CONSTANTS.MAX_AGE_CACHE)
    }

    // set temporary cache user
    async setCacheTempUser(key: string, user: User | null) {
        await this.cacheManager.set(key, user, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
    }

}