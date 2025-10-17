import { MessageType } from "prisma/generated/prisma";

export interface MessageQueue {
content: string;
roomId: string;
type?: MessageType;
replyId?: string;
senderId: string;
}

export interface MessageBatchResult {
successCount: number;
failedMessages: MessageQueue[];
error?: string;
}

export interface MessageProducerData {
message: MessageQueue;
}
