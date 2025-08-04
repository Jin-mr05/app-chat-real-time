import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { GroupService } from "../group/group.service";
import { ChatGateway } from "./chat.gateway";
import { ChatService } from "./chat.service";
@Controller('chat')
export class ChatController {
    constructor(
        private readonly chatService: ChatService,
        private readonly groupService: GroupService,
        private readonly gateway: ChatGateway
    ) { }

    @Post('send-message')
    async sendMessage(@Req() req: Request, @Body() body: {
        type: 'private' | 'group';
        nane: string;
        message: string;
    }) {
        await this.gateway.handleSendMessage(
            req.user?.id,
            body.type,
            body.nane,
            body.message,
        );

        return { success: true };
    }

    @Post('create-individual')
    async createGroupChat(
        @Req() req: Request,
        @Body('name') name: string,
    ) {
        return this.groupService.createGroup(req.user?.id, name)
    }
}