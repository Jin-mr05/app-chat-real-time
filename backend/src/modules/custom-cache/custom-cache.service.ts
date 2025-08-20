import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { AUTH_CONSTANTS } from "../auth/auth.constants";
import { ROOM_CONSTANTS } from "../room/room.constants";
import { UserWithRoom } from "../room/type.room";
import { USER_CONSTANTS } from "../user/user.constants";
import { CacheMetricsService } from "./cache-metrics.service";

@Injectable()
export class CustomCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService,
        private readonly cacheMetrics: CacheMetricsService
    ) { }

    // global
    // set temporary cache object
    async setCacheTempObject(key: string, object: any | null) {
        await this.cacheManager.set(key, object, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
    }


    // user

    // find user by email in cache
    async getUserByEmailInCache(email: string): Promise<User | null> {
        const startTime = Date.now();
        const operation = 'getUserByEmail';

        if (!email) {
            this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
            return null;
        }

        const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(email);
        const cached = await this.cacheManager.get(key) as User;

        if (cached) {
            this.cacheMetrics.recordCacheOperation(operation, true, Date.now() - startTime);
            return cached;
        }

        // fallback to database
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: email },
            omit: { hashedPassword: false }
        });

        if (existingUser) {
            await this.cacheManager.set(key, existingUser, AUTH_CONSTANTS.MAX_AGE_CACHE);
        }

        this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
        return existingUser;
    }

    // find user by id in cache
    async getUserByIdInCache(userId: string): Promise<User | null> {
        const startTime = Date.now();
        const operation = 'getUserById';

        if (!userId || userId === 'unknow') {
            this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
            return null;
        }

        const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId);
        const cached = await this.cacheManager.get(key) as User;

        if (cached) {
            this.cacheMetrics.recordCacheOperation(operation, true, Date.now() - startTime);
            return cached;
        }

        // fallback to database
        const existingUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        });

        if (existingUser) {
            await this.cacheManager.set(key, existingUser, AUTH_CONSTANTS.MAX_AGE_CACHE);
        }

        this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
        return existingUser;
    }

    // find user in cache with name
    async getUserByNameInCache(userName: string) {
        // get in cache
        const key = ROOM_CONSTANTS.CACHE_KEYS.KeyUserWithName(userName)
        const cached = await this.cacheManager.get(key) as User

        if (cached) return cached

        // fall back
        const exitingUser = await this.prismaService.user.findFirst({
            where: { name: userName }
        })

        return exitingUser
    }

    // find list user in cache
    async getListUserInCache(userName: string) {
        // get in cache
        const key = USER_CONSTANTS.CACHE_KEYS.KeyListUser(userName)
        const cached = await this.cacheManager.get(key)

        if (cached) return cached

        // fall back
        const exitingListUsers = await this.prismaService.user.findMany({
            where: {
                name: {
                    contains: userName,
                    mode: 'insensitive'
                },
                AND: {
                    isActive: true,
                    idDelete: false
                },
            },
            select: {
                id: true,
                name: true,
                email: true,
                birthday: true,
                gender: true,
                createAt: true
            },
            take: 20
        })

        return exitingListUsers
    }

    // update cache user
    async updateUserCache(userId: string, user: User) {
        const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
        await this.cacheManager.del(key)
        await this.cacheManager.set(key, user, AUTH_CONSTANTS.MAX_AGE_CACHE)
    }


    // room

    // find user with elementRoom
    async findUserWithRoom(userId: string) {
        // find user in cache 
        const key = ROOM_CONSTANTS.CACHE_KEYS.KeyRoom(userId)
        const cached = await this.cacheManager.get(key) as UserWithRoom

        if (cached) return cached

        // fall back
        const exitingUserWithRoom = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: { createdGroups: true }
        })

        return exitingUserWithRoom
    }

    // find room
    async findRoomInCache(roomId: string) {
        // find room
        const key = ROOM_CONSTANTS.CACHE_KEYS.KeyRoom(roomId)
        const cached = await this.cacheManager.get(key)

        if (cached) return cached

        // fall back
        const exitingRoom = await this.prismaService.room.findUnique({
            where: { id: roomId }
        })

        return exitingRoom
    }

    // Cache warming methods

    // warm cache for frequently active users
    async warmFrequentUsersCache() {
        const startTime = Date.now();
        const operation = 'warmFrequentUsers';

        try {
            // Get users who have been active recently (last 7 days) and have sessions
            const frequentUsers = await this.prismaService.user.findMany({
                where: {
                    isActive: true,
                    idDelete: false,
                    session: {
                        isNot: null
                    },
                    updateAt: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // last 7 days
                    }
                },
                include: {
                    session: true
                },
                orderBy: {
                    updateAt: 'desc'
                },
                take: 100 // limit to top 100 frequent users
            });

            // Pre-load these users into cache
            const warmingPromises = frequentUsers.map(async (user) => {
                const userIdKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(user.id);
                const userEmailKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(user.email);

                await Promise.all([
                    this.cacheManager.set(userIdKey, user, AUTH_CONSTANTS.MAX_AGE_CACHE),
                    this.cacheManager.set(userEmailKey, user, AUTH_CONSTANTS.MAX_AGE_CACHE)
                ]);
            });

            await Promise.all(warmingPromises);

            this.cacheMetrics.recordCacheOperation(operation, true, Date.now() - startTime);
            return {
                success: true,
                warmedUsersCount: frequentUsers.length,
                operation: 'warmFrequentUsersCache'
            };
        } catch (error) {
            this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
            throw error;
        }
    }

    // warm cache for specific user (called after login)
    async warmUserCache(userId: string) {
        const startTime = Date.now();
        const operation = 'warmUser';

        try {
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
                include: {
                    session: true
                }
            });

            if (user) {
                const userIdKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(user.id);
                const userEmailKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(user.email);

                await Promise.all([
                    this.cacheManager.set(userIdKey, user, AUTH_CONSTANTS.MAX_AGE_CACHE),
                    this.cacheManager.set(userEmailKey, user, AUTH_CONSTANTS.MAX_AGE_CACHE)
                ]);

                this.cacheMetrics.recordCacheOperation(operation, true, Date.now() - startTime);
                return user;
            }

            this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
            return null;
        } catch (error) {
            this.cacheMetrics.recordCacheOperation(operation, false, Date.now() - startTime);
            throw error;
        }
    }

    // get cache statistics
    async getCacheStats() {
        // This would depend on your cache implementation
        // For Redis, you could use INFO command
        // For memory cache, you could track manually
        return {
            cacheType: 'memory', // or 'redis'
            // Add more stats as needed
        };
    }


}