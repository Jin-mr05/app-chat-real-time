import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { CommonService } from "src/common/service/common.service";
import { PrismaService } from "src/prisma/prisma.service";
import { RedisService } from "../redis/redis.service";
import { CreateRoomDto } from "./dto/create-room.dto";
import { ROOM_CONSTANTS } from "./room.constants";
import { User } from "prisma/generated/prisma";
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
            where: { linkRoom: roomLink }
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
                linkRoom,
                name: data.name,
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


}