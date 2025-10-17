import { MessageType } from "prisma/generated/prisma"

export interface MessageQueue {
	content: string
	roomId: string
	type?: MessageType
	repLyId?: string
	senderId: string
}