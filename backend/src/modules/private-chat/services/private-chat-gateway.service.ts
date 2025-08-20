import { Injectable, Logger, NotFoundException, ForbiddenException } from '@nestjs/common';
import { User } from 'prisma/generated/prisma';
import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrivateChatGatewayService {
	private readonly logger = new Logger(PrivateChatGatewayService.name);
	private readonly ROOM_PREFIX = 'privateChat';

	constructor(private readonly prismaService: PrismaService) { }

	async handleJoinRoom(client: Socket, user: User, chatId: string): Promise<void> {
		try {
			const chat = await this.prismaService.privateChat.findUnique({
				where: { id: chatId },
				select: {
					id: true,
					user1Id: true,
					user2Id: true,
				},
			});

			if (!chat) {
				client.emit('error', { message: 'Chat not found' });
				return;
			}

			// Check if user is either user1 or user2 in this private chat
			if (chat.user1Id !== user.id && chat.user2Id !== user.id) {
				client.emit('error', { message: 'You are not a participant in this chat' });
				return;
			}

			const room = `chat:${chatId}`; // Thay vì `${this.ROOM_PREFIX}:${chatId}`
			await client.join(room);

			client.emit('joinedRoom', { chatId, room });
			this.logger.log(`User ${user.id} joined private chat room ${room}`);
		} catch (error) {
			this.logger.error(`Error joining room: ${error.message}`, error.stack);
			client.emit('error', { message: 'Failed to join room' });
		}
	}

	async handleLeaveRoom(client: Socket, chatId: string): Promise<void> {
		try {
			const room = `${this.ROOM_PREFIX}:${chatId}`;
			await client.leave(room);

			client.emit('leftRoom', { chatId, room });
			this.logger.log(`Client left private chat room ${room}`);
		} catch (error) {
			this.logger.error(`Error leaving room: ${error.message}`, error.stack);
			client.emit('error', { message: 'Failed to leave room' });
		}
	}

	async getUnreadMessageCount(userId: string, chatId: string): Promise<number> {
		try {
			const chat = await this.prismaService.privateChat.findUnique({
				where: { id: chatId },
				select: {
					user1Id: true,
					user2Id: true,
					user1LastReadIndex: true,
					user2LastReadIndex: true,
					totalMessages: true,
				},
			});

			if (!chat) {
				return 0;
			}

			// Determine which user is requesting and get their last read index
			const isUser1 = chat.user1Id === userId;
			const lastReadIndex = isUser1 ? chat.user1LastReadIndex : chat.user2LastReadIndex;

			return Math.max(0, chat.totalMessages - lastReadIndex);
		} catch (error) {
			this.logger.error(`Error getting unread count: ${error.message}`, error.stack);
			return 0;
		}
	}
}