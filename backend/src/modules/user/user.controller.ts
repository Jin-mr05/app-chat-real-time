import { Controller, Delete, Get, Post, Query, Req } from "@nestjs/common";
import { Request } from 'express';
import { RoomService } from "../room/room.service";
import { UserService } from "./user.service";
@Controller('user')
export class UserController {

    constructor(
        private readonly roomService: RoomService,
        private readonly userService: UserService,
    ) { }

    @Get('find-user-by-name')
    async findUserByName(@Query('userName') userName: string) {
        return this.userService.findUserByName(userName)
    }

    @Post('create-room')
    async createRoom(@Req() req: Request, @Query('addressId') addressId: string) {
        return this.roomService.createRoom(req, addressId)
    }

    @Post('add-member')
    async addMember(@Req() req: Request, @Query('userName') userName: string, @Query('roomId') roomId: string) {
        return this.roomService.addMember(req, userName, roomId)
    }

    @Delete('remove-member')
    async removeMember(@Query('userId') userId: string) {
        return this.roomService.removeMember(userId)
    }

    @Get('/chat/user-rooms')
    async getUserRooms(@Req() req: Request) {
        return this.roomService.getUserRooms(req)
    }

}
