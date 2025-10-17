import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { CommonService } from "src/common/service/common.service";
import { PrismaService } from "src/prisma/prisma.service";
import { RedisService } from "../redis/redis.service";
import { CreateRoomDto } from "./dto/create-room.dto";
import { ROOM_CONSTANTS } from "./room.constants";
import { User } from "prisma/generated/prisma";
import { FindRoomDto } from "./dto/find-room.dto";
import { take } from "rxjs";
@Injectable()
export class RoomService {
    constructor(
        private readonly prismaService: PrismaService,
        @Inject("REDIS_CLIENT") private readonly redisService: RedisService,
        private readonly commonService: CommonService
    ) { }

    // check available room 
    async getRoomWithRoomLink(roomLink: string) {
        return await this.prismaService.room.findUnique({
            where: { link: roomLink }
        })
    }

    // generate roomlink
    generateRoomLink(nameRoom: string, authorId: string) {
        return ROOM_CONSTANTS.LINK_ROOM(nameRoom, authorId)
    }

    // create room
    async createRoom(req: Request, data: CreateRoomDto) {
        // check avaialable room
        const userId = req.user?.id || 'unknow'
        console.log(userId)
        const user = await this.commonService.checkingAvailableUser(userId) as User
        if (!user) throw new NotFoundException("User not found")

        console.log(user.id)

        // generate link
        const linkRoom = this.generateRoomLink(data.name, userId)

        // checking available room
        const availableRoom = await this.getRoomWithRoomLink(linkRoom)
        if (availableRoom) throw new ConflictException("Room is available")

        // crerate new room
        const newRoom = await this.prismaService.room.create({
            data: {
                link: linkRoom,
                authorId: userId
            }
        })

        return {
            success: true,
            data: {
                newRoom
            }
        }
    }

    // delete room
    async deleteRoom(roomId: string) {
        // delete room
        const deleteRoom = await this.prismaService.room.delete({
            where: { id: roomId }
        })

        return {
            success: true,
            data: {
                deleteRoom
            }
        }
    }

    // finding room
    async findRoom(data: FindRoomDto) {
        const searchItem = data.nameRoom.trim().toLowerCase()

        // construct query
        const take = data?.take || 10
        const queryOptions: any = {
            where: {
                name: {
                    contains: searchItem,
                    mode: 'insensitive' // <-- sửa đúng chính tả
                }
            },
            take: take + 1
        }

        // pagination
        if (data?.cursor) {
            queryOptions.cursor = { id: data?.cursor }
            queryOptions.skip = 1
        } else if (data?.page && data?.skip !== undefined) {
            queryOptions.skip = data.skip,
                queryOptions.take = take
        }

        const rooms = await this.prismaService.room.findMany(queryOptions)

        // check hasMore 
        const hasMore = rooms.length > take
        if (hasMore) rooms.pop()
        const nextCursor = hasMore && rooms.length > 0 ? rooms[rooms.length - 1].id : null

        const result = {
            rooms,
            pagination: data?.cursor ?
                {
                    limit: take,
                    hasNext: hasMore,
                    nextCursor,
                    cursor: data.cursor
                } :
                {
                    page: data?.page || 1,
                    limit: data?.take || 10,
                    hasNext: hasMore,
                    hasPrev: (data?.page || 1) > 1
                }
        }

        return {
            success: true,
            data: rooms
        }
    }


}