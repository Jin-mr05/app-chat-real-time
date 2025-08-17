import { Controller, Get, Query } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller('chat')
export class chatController {

	constructor(
		private readonly chatService: ChatService
	) { }

	@Get('loading-message')
	async loadingMessage(
		@Query('roomId') roomId: string,
		@Query('cursor') cursor?: string,
		@Query('limit') limit = '20',
		@Query('direction') direction: 'next' | 'prev' = 'next',
	) {
		return this.chatService.loadingMessage(roomId, {
			cursor,
			limit: Number(limit),
			direction
		}

		)
	}

}