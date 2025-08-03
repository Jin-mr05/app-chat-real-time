import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "../auth/auth.service";
@WebSocketGateway({
    cors: { origin: '*' },
    namespace: 'chat-feature'
})
export class ChatGateway {

    constructor(
        private readonly authService: AuthService,
        private readonly prismaService: PrismaService,
    ) { }

    // create server
    @WebSocketServer()
    server: Server

    private async verifyToken(accessToken: string) {
        // validate 
        const exitedUser = await this.authService.validate(accessToken)

        if (!exitedUser) {
            throw new Error('user not found')
        }

        return exitedUser.id
    }

    // join private room
    private getPrivateRoom = (userA: string, userB: string) =>
        `room:private:${[userA, userB].sort().join('_')}`

    // group zoom
    private getGroupRoom = (groupId: string) => `room:group:${groupId}`

    @SubscribeMessage('join-chat')
    async joinChat(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { type: 'private' | 'group'; targetId: string },
    ) {
        const userId = await this.verifyToken(client.handshake.auth.token);
        client.data.userId = userId;

        const room =
            data.type === 'group'
                ? this.getGroupRoom(data.targetId)
                : this.getPrivateRoom(userId, data.targetId);

        // join the room
        client.join(room)
        console.log(`User ${userId} joined ${room}`)
    }

    @SubscribeMessage('send_message')
    async sendMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: {
            type: 'private' | 'group';
            targetId: string;
            message: string;
        },
    ) {
        const userId = client.data.userId
        const room =
            data.type === 'group'
                ? this.getGroupRoom(data.targetId)
                : this.getPrivateRoom(userId, data.targetId)

        this.server.to(room).emit('receive_message', {
            from: userId,
            message: data.message
        })

        if (data.type === 'group') {
            // save  message
            await this.prismaService.message.create({
                data: {
                    content: data.message,
                    userId,
                    roomId: `room:group:${data.targetId}`
                }
            })

        } else {
            // save  message
            await this.prismaService.message.create({
                data: {
                    content: data.message,
                    userId,
                    roomId: `room:private:${userId}_${data.targetId}`,
                    addressId: data.targetId
                }
            })
        }
    }
}