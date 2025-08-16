import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/custom-cache.service";
import { ROOM_CONSTANTS } from "./room.constants";
import { UserWithRoom } from "./type.room";

@Injectable()
export class RoomService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly customCache: CustomCacheService,
        @Inject(CACHE_MANAGER) private cacheManage: Cache
    ) { }

    // generate link room
    async generateLinkRoom(authorId: string, addressId: string, quantityGroups: number) {
        const linkGroup = `${authorId}-${addressId} + ${quantityGroups + 1}`
        return linkGroup
    }

    // create room 
    async createRoom(userId: string, addressId: string, nameRoom: string) {
        // find user
        const exitingUser = await this.customCache.findUserWithRoom(userId) as UserWithRoom

        // fall back
        if (!exitingUser) {
            const key = ROOM_CONSTANTS.CACHE_KEYS.KeyUserWithERoom(userId)
            await this.cacheManage.set(key, null, ROOM_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
        }

        // quantity number
        const quantityNumber = exitingUser?.createdGroups.length || 0

        // generate link group
        const linkRoom = await this.generateLinkRoom(userId, addressId, quantityNumber)

        const newRoom = await this.prismaService.room.create({
            data: {
                name: nameRoom,
                authorId: userId,
                linkRoom: linkRoom
            }
        })

        // create permission 
        await this.prismaService.groupMember.create({
            data: {
                roomID: newRoom.id,
                userId: userId,
                roleId: 'a5cd6770-38ed-4deb-acc4-c32c6cff6f9d'
            }
        })

        return newRoom
    }

    // add member
    async addMember(req: Request, userName: string, roomId: string) {
        // find author
        const userId = req.user?.id
        const author = await this.customCache.getUserByIdInCache(userId)

        if (!author) {
            // fall back
            const key = ROOM_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('User not found')
        }

        // find room
        const exitingRoom = await this.customCache.findRoomInCache(roomId)

        // fall back
        if (!exitingRoom) {
            const key = ROOM_CONSTANTS.CACHE_KEYS.KeyRoom(roomId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException("Room not found")
        }

        // find address user
        const member = await this.customCache.getUserByNameInCache(userName)

        // fall back 
        if (!member) {
            const key = ROOM_CONSTANTS.CACHE_KEYS.KeyUserWithName(userName)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException("User not found")
        }

        // add member
        const newMember = await this.prismaService.groupMember.create({
            data: {
                userId: member.id,
                roomID: roomId,
                roleId: 'a5cd6770-38ed-4deb-acc4-c32c6cff6f9d'
            }
        })

        return newMember
    }
}