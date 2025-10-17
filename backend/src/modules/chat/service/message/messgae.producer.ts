import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { MessageQueue } from "./message.interface";

@Injectable()
export class MessageProducer {
	constructor(
		@Inject("MESSAGE_QUEUE") private readonly client: ClientProxy
	) { }


	async sendMessage(data: { message: MessageQueue }) {
		await this.client.emit('send-message', data)
	}

}