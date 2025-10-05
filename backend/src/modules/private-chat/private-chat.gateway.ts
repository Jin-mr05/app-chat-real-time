import { Logger, UseFilters, UsePipes } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsException } from "@nestjs/websockets";
import { WsExceptionFilter } from "./common/filters/ws.exception.filter";
import { WsValidationPipe } from "./common/pipes/ws.validation.pipe";
import { Server, Socket } from "socket.io";
import { PrivateChatService } from "./private-chat.service";
import { CreatePrivateMessageDto } from "./dto/create-private-message.dto";

@WebSocketGateway({
	namespace: '/private-chat',
	cors: {
		origin: process.env.FRONTEND_URL, // Sửa typo: FRONTEDN_URL -> FRONTEND_URL
		credentials: true
	}
})

@UseFilters(new WsExceptionFilter)
@UsePipes(new WsValidationPipe())
export class PrivateChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	private readonly logger = new Logger(PrivateChatGateway.name)

	@WebSocketServer()
	server: Server

	constructor(
		private readonly privateChatService: PrivateChatService
	) { }

	afterInit(server: Server) {
		this.logger.log('✅ Private Chat WebSocket Gateway initialized');
	}

	async handleConnection(client: Socket) {
		try {
			const userId = client.handshake.auth.userId
			const token = client.handshake.auth.token

			// validate authentication
			if (!userId || !token) {
				this.logger.warn(`❌ Unauthorized connection attempt`);
				client.disconnect()
				return
			}

			// verify user exists and token is valid
			const user = await this.privateChatService.validateUser(userId, token)
			if (!user) {
				this.logger.warn(`❌ Invalid user or token: ${userId}`)
				client.disconnect()
				return
			}

			client.data.userId = userId
			client.data.user = user

			// set user online
			await this.privateChatService.setUserOnline(userId, true)

			// join user to their personal for notification
			client.join(`user:${userId}`)

			this.logger.log(`🔌 User connected: ${user.fullName} (${userId})`)

			// notification user contact about online status
			this.server.emit('userStatusChanged', {
				userId,
				status: 'online',
				lastSeen: new Date()
			})

		} catch (error) {
			this.logger.error(`Error in handleConnection:`, error);
			client.disconnect();
		}
	}

	async handleDisconnect(client: Socket) {
		try {
			const userId = client.data.userId
			const user = client.data.user

			if (userId) {
				await this.privateChatService.setUserOnline(userId, false)

				this.logger.log(`❌ User disconnected: ${user?.fullname || userId}`);

				// notification
				this.server.emit('userStatusChanged', {
					userId,
					status: 'offline',
					lastSeen: new Date()
				})
			}
		} catch (error) {
			this.logger.error(`Error in handleDisconnect:`, error);
		}
	}

	@SubscribeMessage('joinChat')
	async onJoinChat(
		@MessageBody() data: { chatId: string },
		@ConnectedSocket() client: Socket
	) {
		try {
			const { chatId } = data
			const userId = client.data.userId

			if (!chatId) throw new WsException('Chat ID is required')

			// verify user has access to this chat
			const hasAccess = await this.privateChatService.verifyUserChatAccess(userId, chatId)

			if (!hasAccess) throw new WsException('Access denied to this chat')

			// Leave previous chat rooms
			const rooms = Array.from(client.rooms);
			rooms.forEach(room => {
				if (room.startsWith('chat:')) {
					client.leave(room);
				}
			});

			// join new chat room
			const roomName = `chat:${chatId}`
			client.join(roomName)

			this.logger.log(`👥 User ${userId} joined chat ${chatId}`);

			// mark message as read
			await this.privateChatService.markMessagesAsRead(chatId, userId)

			return {
				success: true,
				message: 'Join chat successfully',
				chatId
			}

		} catch (error) {
			this.logger.error(`Error joining chat:`, error);
			throw new WsException(error.message || 'Failed to join chat');
		}
	}

	@SubscribeMessage('sendMessage')
	async sendMessage(
		@MessageBody() dto: CreatePrivateMessageDto,
		@ConnectedSocket() client: Socket
	) {
		try {
			const userId = client.data.userId

			// validate access to chat
			const hasAccess = await this.privateChatService.verifyUserChatAccess(userId, dto.chatId)
			if (!hasAccess) throw new WsException('Access denied to this chat')

			// create message 
			const message = await this.privateChatService.createMessage(userId, dto)

			//broadcast to room
			this.server.to(`chat:${dto.chatId}`).emit('newMessage', message)

			this.logger.log(`📨 Message sent in chat ${dto.chatId} by user ${userId}`);

			return {
				success: true,
				message: 'Message sent successfully',
				data: message
			}
		} catch (error) {
			this.logger.error(`Error sending message:`, error);
			throw new WsException(error.message || 'Failed to send message');
		}
	}

	@SubscribeMessage('typing')
	async onTyping(
		@MessageBody() data: { chatId: string, isTyping: boolean },
		@ConnectedSocket() client: Socket
	) {
		try {
			const { chatId, isTyping } = data
			const userId = client.data.userId
			const user = client.data.user

			if (!chatId) throw new WsException('Chat ID is require')

			// broadcast to room
			this.server.to(`chat:${chatId}`).emit('userTyping', {
				userId,
				userName: user.name,
				isTyping,
				timeStamp: new Date()
			})

			return { success: true }
		} catch (error) {
			this.logger.error(`Error handling typing:`, error);
			throw new WsException('Failed to handle typing status');
		}
	}

	@SubscribeMessage('markAsRead')
	async onMarkAsRead(
		@MessageBody() data: { chatId: string },
		@ConnectedSocket() client: Socket
	) {
		try {
			const { chatId } = data;
			const userId = client.data.userId;

			await this.privateChatService.markMessagesAsRead(chatId, userId);

			// Notify sender about read status
			client.to(`chat:${chatId}`).emit('messagesRead', {
				chatId,
				readBy: userId,
				timestamp: new Date()
			});

			return { success: true };

		} catch (error) {
			this.logger.error(`Error marking messages as read:`, error);
			throw new WsException('Failed to mark messages as read');
		}
	}

	// Public method for external use
	async broadcastToUser(userId: string, event: string, data: any) {
		this.server.to(`user:${userId}`).emit(event, data);
	}

	async broadcastToChat(chatId: string, event: string, data: any) {
		this.server.to(`chat:${chatId}`).emit(event, data);
	}

	async broadcastNewMessage(message: any) {
		this.server.to(`chat:${message.chatId}`).emit('newMessage', message);
	}

}