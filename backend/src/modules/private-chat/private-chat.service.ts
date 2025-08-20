import { BadRequestException, ForbiddenException, Injectable, NotFoundException, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { JwtService } from "@nestjs/jwt";
import Redis from "ioredis";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePrivateMessageDto } from "./dto/create-private-message.dto";
import { FindAllPrivateChatDto } from "./dto/find-all-private-chat.dto";


@Injectable()
export class PrivateChatService implements OnModuleDestroy {
	private redis: Redis

	constructor(
		private readonly configService: ConfigService,
		private readonly jwtService: JwtService,
		private readonly prismaService: PrismaService,
		private readonly evenEmitter: EventEmitter2
	) {
		const redisUrl = this.configService.getOrThrow<string>("REDIS_URL")
		this.redis = new Redis(redisUrl)

		this.redis.on('error', (error) => {
			console.log('Redis connection error:', error)
		})
	}

	async onModuleDestroy() {
		await this.redis.disconnect()
	}

	async validateUser(userId: string, token: string) {
		try {
			// verify jwt token
			const payload = this.jwtService.verify(token)
			if (payload.sub !== userId) return null

			// get user from database
			const user = await this.prismaService.user.findUnique({
				where: { id: userId },
				select: {
					id: true,
					name: true,
					email: true
				}
			})

			return user
		} catch (error) {
			console.error('Error validating user:', error)
			return null
		}
	}

	async setUserOnline(userId: string, isOnline: boolean) {
		try {

			const status = isOnline ? 'online' : 'offline'
			const timestamp = new Date().toISOString()

			await this.redis.hset('user_status', userId, JSON.stringify({
				status,
				lastSeen: timestamp
			}))

			// update database last seen
			if (!isOnline) {
				await this.prismaService.user.update({
					where: { id: userId },
					data: { lastSeenAt: new Date() }
				})
			}

		} catch (error) {
			console.error('Error setting user online status', error)
			throw error
		}
	}

	async getUserStatus(userId: string) {
		try {
			const status = await this.redis.hget('user_status', userId)
			return status ? JSON.parse(status) : { status: 'offline', lastSeen: null }
		} catch (error) {
			console.error("Error getting user status", error)
			return { status: 'offline', lastSeen: null }
		}
	}

	async verifyUserChatAccess(userId: string, chatId: string): Promise<boolean> {
		try {
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				}
			})

			return !!chat
		} catch (error) {
			console.error("Error verifying chat access: ", error)
			return false
		}
	}

	async createMessage(userId: string, dto: CreatePrivateMessageDto) {
		try {
			// verify chat exists and user has access
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: dto.chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				},
				include: {
					user1: { select: { id: true, name: true } },
					user2: { select: { id: true, name: true } }
				}
			})

			if (!chat) throw new NotFoundException("Chat not found or access denied")

			const totalMessages = chat?.totalMessages + 1

			// create message
			// Thêm transaction để đảm bảo data consistency
			const result = await this.prismaService.$transaction(async (tx) => {
				const newMessage = await tx.privateMessage.create({
					data: {
						content: dto.content,
						senderId: userId,
						chatId: dto.chatId,
						type: dto.type,
						messageIndex: totalMessages
					},
					include: {
						sender: {
							select: { id: true, name: true }
						}
					}
				})

				await tx.privateChat.update({
					where: { id: dto.chatId },
					data: {
						lastMessageAt: new Date(),
						lastMessage: dto.content,
						totalMessages: { increment: 1 } // Thêm increment
					}
				})

				return newMessage
			})

			// emit even
			this.evenEmitter.emit('private.message.created', {
				newMessage: result,
				chat,
				recipientId: chat.user1Id === userId ? chat.user2Id : chat.user1Id
			})

			return result
		} catch (error) {
			console.error('Error creating message :', error)
			if (error instanceof NotFoundException) throw error
			throw new BadRequestException('Failed to create message')
		}
	}

	async findMessages(currentUserId: string, chatId: string, query: FindAllPrivateChatDto) {
		try {
			// verify access
			const hasAccess = await this.verifyUserChatAccess(currentUserId, chatId)
			if (!hasAccess) throw new ForbiddenException('Access denied to this chat')

			const { page = 1, limit = 20, cursor } = query
			const skip = (page - 1) * limit

			const whereClause: any = { chatId }

			if (cursor) {
				whereClause.id = { lt: parseInt(cursor) }
			}

			const messages = await this.prismaService.privateMessage.findMany({
				where: whereClause,
				orderBy: { createdAt: 'desc' },
				take: limit + 1,
				skip: cursor ? 0 : skip,
				include: {
					sender: {
						select: {
							id: true,
							name: true
						}
					}
				}
			})

			const hasMore = messages.length > limit
			const items = hasMore ? messages.slice(0, -1) : messages
			const nextCursor = items.length > 0 ? items[items.length - 1].id.toString() : null

			return {
				items: items.reverse(), // Reverse to show oldest first
				pagination: {
					page,
					limit,
					hasMore,
					nextCursor,
					total: await this.prismaService.privateMessage.count({ where: { chatId } })
				}
			};
		} catch (error) {
			console.error('Error finding messages:', error);
			if (error instanceof ForbiddenException) {
				throw error;
			}
			throw new BadRequestException('Failed to retrieve messages')
		}
	}

	async findChatHistory(userId: string, query: FindAllPrivateChatDto) {
		try {
			const { page = 1, limit = 20, search } = query;
			const skip = (page - 1) * limit;

			const whereClause: any = {
				OR: [
					{ user1Id: userId },
					{ user2Id: userId }
				]
			};

			if (search) {
				whereClause.AND = {
					OR: [
						{ user1: { name: { contains: search, mode: 'insensitive' } } },
						{ user2: { name: { contains: search, mode: 'insensitive' } } }
					]
				};
			}

			const chats = await this.prismaService.privateChat.findMany({
				where: whereClause,
				orderBy: { lastMessageAt: 'desc' },
				take: limit,
				skip,
				include: {
					user1: {
						select: {
							id: true,
							name: true
						}
					},
					user2: {
						select: {
							id: true,
							name: true,
						}
					}
				}
			});

			const total = await this.prismaService.privateChat.count({ where: whereClause });

			return {
				items: chats.map(chat => {
					const isUser1 = chat.user1Id === userId;
					const lastReadIndex = isUser1 ? chat.user1LastReadIndex : chat.user2LastReadIndex;
					const unreadCount = Math.max(0, chat.totalMessages - lastReadIndex);

					return {
						...chat,
						otherUser: isUser1 ? chat.user2 : chat.user1,
						unreadCount
					};
				}),
				pagination: {
					page,
					limit,
					total,
					totalPages: Math.ceil(total / limit),
					hasMore: skip + limit < total
				}
			};

		} catch (error) {
			console.error('Error finding chat history:', error);
			throw new BadRequestException('Failed to retrieve chat history');
		}
	}

	async markMessagesAsRead(chatId: string, userId: string) {
		try {
			// Verify user has access to this chat
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				}
			});

			if (!chat) {
				throw new NotFoundException('Chat not found or access denied');
			}

			// Update the appropriate lastReadIndex based on which user is reading
			const isUser1 = chat.user1Id === userId;
			const updateData = isUser1
				? { user1LastReadIndex: chat.totalMessages }
				: { user2LastReadIndex: chat.totalMessages };

			await this.prismaService.privateChat.update({
				where: { id: chatId },
				data: updateData
			});

			// Emit event for real-time updates
			this.evenEmitter.emit('messages.read', {
				chatId,
				userId,
				readIndex: chat.totalMessages
			});

		} catch (error) {
			console.error('Error marking messages as read:', error);
			if (error instanceof NotFoundException) throw error;
			throw new BadRequestException('Failed to mark messages as read');
		}
	}

	async createOrGetChat(user1Id: string, user2Id: string) {
		try {
			if (user1Id === user2Id) {
				throw new BadRequestException('Cannot create chat with yourself');
			}

			// Check if chat already exists
			let chat = await this.prismaService.privateChat.findFirst({
				where: {
					OR: [
						{ user1Id, user2Id },
						{ user1Id: user2Id, user2Id: user1Id }
					]
				},
				include: {
					user1: { select: { id: true, name: true } },
					user2: { select: { id: true, name: true } }
				}
			});

			if (!chat) {
				// Create new chat
				chat = await this.prismaService.privateChat.create({
					data: {
						user1Id,
						user2Id
					},
					include: {
						user1: { select: { id: true, name: true } },
						user2: { select: { id: true, name: true } }
					}
				});
			}

			return chat;

		} catch (error) {
			console.error('Error creating/getting chat:', error);
			throw new BadRequestException('Failed to create or get chat');
		}
	}

	async sendNotificationIfOffline(message: any) {
		// Implementation for sending push notifications
		// This would integrate with your notification service
		try {
			// Check if recipient is offline
			// Send push notification if offline
		} catch (error) {
			console.error('Error sending notification:', error);
		}
	}


}