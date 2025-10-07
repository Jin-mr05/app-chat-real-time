import { Body, Controller, Delete, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { CreateRoomDto } from "./dto/create-room.dto";
import { RoomService } from "./room.service";
import { IsAuthotRoom } from "./guard/isAuthorRoom.guard";
import { Public } from "src/common/decorator/public.decorator";
import { FindRoomDto } from "./dto/find-room.dto";
@Controller('room')
export class RoomController {

	constructor(
		private readonly roomService: RoomService
	) { }

	@Post('create-room')
	async createRoom(@Req() req: Request, @Body() data: CreateRoomDto) {
		return this.roomService.createRoom(req, data)
	}

	@Delete('delete-room')
	@UseGuards(IsAuthotRoom)
	async deleteRoom( @Query('roomId') roomId: string) {
		return this.roomService.deleteRoom(roomId)
	}

	@Public()
	@Get('finding-room')
	async findingRoom(@Body() data: FindRoomDto) {
		return this.roomService.findRoom(data)
	}
}