import { Injectable } from "@nestjs/common";
import { PrivateChatGateway } from "./private-chat.gateway";
import { OnEvent } from "@nestjs/event-emitter";
import { PrivateMessageResponse } from "./private-chat.interface";

@Injectable()
export class PrivateChatEventListener {
	constructor(
		private readonly privateChatGateway: PrivateChatGateway
	) { }

	@OnEvent('private.message.created')
	handlePrivateMessageCreated(payload: { message: PrivateMessageResponse }) {
		this.privateChatGateway.broadcastToChat(
			payload.message.chatId,
			'newMessage',
			payload.message,
		);
	}
}