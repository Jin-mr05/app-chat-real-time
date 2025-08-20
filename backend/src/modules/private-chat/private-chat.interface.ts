// filepath: /private-chat/private-chat/private-chat.interface.ts



export interface PrivateMessageResponse {
	id: string;
	content: string;
	type: MessageType;
	chatId: string;
	senderId: string;
	messageIndex: number;

	// File/Media metadata
	fileUrl?: string;
	fileName?: string;
	fileSize?: number;
	mimeType?: string;

	// Reply functionality
	replyToId?: string;
	replyTo?: PrivateMessageResponse;

	createdAt: Date;
	updatedAt: Date;

	sender: {
		id: string;
		name: string;
	};
}

export interface PrivateChatResponse {
	id: string;
	user1Id: string;
	user2Id: string;
	lastMessage?: string;
	lastMessageAt?: Date;

	// Read tracking
	user1LastReadIndex: number;
	user2LastReadIndex: number;
	totalMessages: number;

	createdAt: Date;
	updatedAt: Date;

	user1: {
		id: string;
		name: string;
	};
	user2: {
		id: string;
		name: string;
	};

	// Computed fields
	otherUser?: {
		id: string;
		name: string;
	};
	unreadCount?: number;
}

export interface UserResponse {
	id: string;
	name?: string;
	email: string;
	birthday?: Date;
	gender?: Gender;
	lastSeenAt?: Date;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserStatusResponse {
	status: 'online' | 'offline';
	lastSeen: string | null;
}

export interface ChatHistoryResponse {
	items: PrivateChatResponse[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
		hasMore: boolean;
	};
}

export interface MessagesResponse {
	items: PrivateMessageResponse[];
	pagination: {
		page: number;
		limit: number;
		hasMore: boolean;
		nextCursor?: string;
		total: number;
	};
}

export interface TypingStatusResponse {
	id: string;
	chatId: string;
	userId: string;
	createdAt: Date;
	user: {
		id: string;
		name: string;
	};
}

// Enums matching Prisma schema
export enum MessageType {
	TEXT = 'TEXT',
	IMAGE = 'IMAGE',
	FILE = 'FILE',
	VIDEO = 'VIDEO',
	AUDIO = 'AUDIO',
	EMOJI = 'EMOJI',
	STICKER = 'STICKER',
	LOCATION = 'LOCATION',
	SYSTEM = 'SYSTEM'
}

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
	OTHERS = 'OTHERS'
}

// WebSocket Event Interfaces
export interface PrivateMessageCreatedEvent {
	newMessage: PrivateMessageResponse;
	chat: PrivateChatResponse;
	recipientId: string;
}

export interface MessagesReadEvent {
	chatId: string;
	userId: string;
	readIndex: number;
}

export interface UserTypingEvent {
	chatId: string;
	userId: string;
	isTyping: boolean;
	userName: string;
}

export interface UserStatusEvent {
	userId: string;
	status: 'online' | 'offline';
	lastSeen?: string;
}

// API Response Wrappers
export interface ApiResponse<T> {
	success: boolean;
	data?: T;
	message?: string;
	error?: string;
}

export interface PaginatedResponse<T> {
	items: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
		hasMore: boolean;
		nextCursor?: string;
	};
}

// Notification Interfaces
export interface NotificationPayload {
	title: string;
	body: string;
	data: {
		type: 'private_message';
		chatId: string;
		messageId: string;
		senderId: string;
		senderName: string;
	};
	badge: number;
}

export interface NotificationResponse {
	id: string;
	userId: string;
	title: string;
	body: string;
	data: string; // JSON string
	type: string;
	isRead: boolean;
	createdAt: Date;
}