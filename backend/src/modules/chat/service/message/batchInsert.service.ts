
import { Injectable } from "@nestjs/common";
import { MessageQueue } from "./message.interface";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BatchInsertService {
	private messageQueue: MessageQueue[] = []
	private readonly BATCH_SIZE = 1000

	constructor(
		private readonly prismaService: PrismaService
	) {
		setInterval(() => this.batchInsert(), 1000);
	}

	async addMessageToQueue(message: MessageQueue) {
		this.messageQueue.push(message)
		if (this.messageQueue.length >= this.BATCH_SIZE) {
			await this.batchInsert
		}
	}

	private async batchInsert() {
		if (this.messageQueue.length === 0) return

		const messages = this.messageQueue.splice(0, this.BATCH_SIZE)
		await this.prismaService.message.createMany({ data: messages })
	}
}