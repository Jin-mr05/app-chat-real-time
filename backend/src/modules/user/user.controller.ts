import { Body, Controller, Delete, Get, Post, Query, Req } from "@nestjs/common";
import { ChatService } from "../chat/chat.service";
import { Request } from 'express';

@Controller('user')
export class UserController {

    constructor(
        private readonly chatService: ChatService
    ) { }

    @Get('loading-message')
    async loadingAllMessage(@Req() req: Request) {
        return this.chatService.loadingAllMessage(req)
    }

    @Post('edit-message')
    async editMessage(@Req() req: Request, @Query('messageId') messageId: number, @Body('newContent') newContent: string) {
        return this.chatService.editMessage(req, messageId, newContent)
    }

    @Delete('delete-message')
    async deleteMessage(@Req() req: Request, @Query('messageId') messageId: number) {
        return this.chatService.deleteMessage(req, messageId)
    }
}