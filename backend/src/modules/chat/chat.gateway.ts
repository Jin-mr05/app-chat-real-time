import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";
import { SendMessageDto } from "./dto/SendMessage.dto";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})

export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server

    constructor(
        private readonly chatService: ChatService
    ) { }

    afterInit(server: Server) {
        console.log('✅ WebSocket Gateway initialized');
    }

    async handleConnection(client: Socket) {
        const userId = client.handshake.auth.userId

        if (!userId) return client.disconnect()

        client.data.userId = userId
        console.log(`🔌 Client connected: ${userId}`)
        await this.chatService.setUserOnline(userId, true)

    }

    async handleDisconnect(client: Socket) {
        const userId = client.data.userId
        console.log(`❌ Client disconnected: ${userId}`)
        await this.chatService.setUserOnline(userId, false)
    }

    @SubscribeMessage('joinRoom')
    async onJoinRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
        client.join(roomId)
        console.log(`👥 User ${client.data.userId} joined room ${roomId}`)
    }

    @SubscribeMessage('sendMessage')
    async sendMessage(
        @MessageBody() dto: SendMessageDto,
        @ConnectedSocket() client: Socket
    ) {
        const message = await this.chatService.createMessage(client.data.userId, dto.roomId, dto.content)

        // emit
        this.server.to(dto.roomId).emit('newMessage', message)
        return message
    }

}