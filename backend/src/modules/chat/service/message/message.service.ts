import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMessageDto } from "./dto/createMessage.dto";
import { CommonService } from "src/common/service/common.service";
import { MessageQueue } from "./message.interface";
import { MessageProducer } from "./messgae.producer";

@Injectable()
export class MessageService {

	constructor(
		private readonly prismaSerivce: PrismaService,
		private readonly commonService: CommonService,
		private readonly messageProducer: MessageProducer
	) { }

	// checking availabe room
	private async getRoomWithId(roomId: string) {
		const room = await this.prismaSerivce.room.findUnique({
			where: { id: roomId },
			// custom data 
			include: {
				messagesInRoom: true,
				members: {
					select: {
						id: true,
						user: {
							select: {
								id: true,
								avatar: true,
								isOnline: true
							}
						}
					}
				}
			}
		})
		return room
	}


	// create message
	async createMessage(senderId: string, dto: CreateMessageDto) {
		// check available user
		const user = await this.commonService.checkingAvailableUser(senderId)
		if (!user) throw new NotFoundException("User not found")

		// checking availabe room
		const room = await this.getRoomWithId(dto.roomId)
		if (!room) throw new NotFoundException("Room not found")

		// create message object
		const message: MessageQueue = {
			content: dto.content,
			roomId: dto.roomId,
			senderId,
			...(dto.replyId ? { replyId: dto.replyId } : {}),
			...(dto.type ? { type: dto.type } : {})
		}

		// emit event`
		this.messageProducer.sendMessage({ message })

		return message
	}
}