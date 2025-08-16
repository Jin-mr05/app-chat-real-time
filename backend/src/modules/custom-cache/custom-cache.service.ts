import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { AUTH_CONSTANTS } from "../auth/auth.constants";
import { ROOM_CONSTANTS } from "../room/room.constants";
import { UserWithRoom } from "../room/type.room";

@Injectable()
export class CustomCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService
    ) { }

    // global
    // set temporary cache object
    async setCacheTempObject(key: string, object: any | null) {
        await this.cacheManager.set(key, object, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
    }


    // user

    // find user by email in cache
    async getUserByEmailInCache(email: string): Promise<User | null> {
        if (!email) return null;

        const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(email)
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

        const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
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


}