import { MessageType } from "prisma/generated/prisma"

export class CreateMessageDto {
	content: string
	type?: MessageType
	replyId?: string
	roomId: string
}