import { Body, Controller, Delete, Get, Post, Put, Query, Req } from "@nestjs/common";
import { ChatService } from "../chat/chat.service";
import { Request } from 'express';
import { PaginationDto } from "../chat/dto/pagination.dto";
import { GroupService } from "../room/room.service";
import { UserService } from "./user.service";
import { ChangeDetailDto } from "./dto/Change-detail.dto";

@Controller('user')
export class UserController {

    constructor(
        private readonly chatService: ChatService,
        private readonly groupService: GroupService,
        private readonly userService: UserService,
    ) { }

    @Get('loading-message')
    async loadingAllMessage(@Req() req: Request, @Query() pagination: PaginationDto) {
        return this.chatService.loadingAllMessage(req, pagination)
    }

    @Post('edit-message')
    async editMessage(@Req() req: Request, @Query('messageId') messageId: number, @Body('newContent') newContent: string) {
        return this.chatService.editMessage(req, messageId, newContent)
    }

    @Delete('delete-message')
    async deleteMessage(@Req() req: Request, @Query('messageId') messageId: number) {
        return this.chatService.deleteMessage(req, messageId)
    }

    @Put('profile')
    async updateProfile(@Req() req: Request, @Body() data: ChangeDetailDto) {
        return this.userService.changeBasicDetail(req, data)
    }

    @Get('find-user')
    async findUser(@Query('name') name: string) {
        return this.userService.findUser(name)
    }

    @Get('search')
    async searchUsers(@Query('q') query: string) {
        return this.userService.searchUsers(query)
    }
}
