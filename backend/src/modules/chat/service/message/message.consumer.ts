import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { MessageQueue } from "./message.interface";
import { BatchInsertService } from "./batchInsert.service";

@Controller()
export class MessageConsumer {

	constructor(
		private readonly batchInsertService: BatchInsertService
	) { }

	@EventPattern('send-message')
	async sendMessage(@Payload() data: { message: MessageQueue }) {
		return this.batchInsertService.addMessageToQueue(data.message)
	}


}