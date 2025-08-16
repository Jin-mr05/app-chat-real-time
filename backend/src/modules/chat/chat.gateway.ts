import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "../auth/auth.service";
import { GroupService } from "../room/room.service";
import { NotFoundException } from "@nestjs/common";
@WebSocketGateway({
    cors: { origin: '*' },
    namespace: 'chat-feature'
})
export class ChatGateway {

    constructor(
        private readonly authService: AuthService,
        private readonly prismaService: PrismaService,
        private readonly groupService: GroupService
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

    async handleSendMessage(
        senderId: string,
        type: 'private' | 'group',
        targetId: string,  // Changed from 'name' to 'targetId'
        message: string,
    ) {
        // For private messages, verify target user exists by ID
        if (type === 'private') {
            const targetUser = await this.prismaService.user.findUnique({
                where: { id: targetId }
            })

            if (!targetUser) {
                throw new Error('user not found')
            }
        }

        const room =
            type === 'group'
                ? this.getGroupRoom(targetId)  // targetId is the group ID
                : this.getPrivateRoom(senderId, targetId);  // targetId is the user ID

        this.server.to(room).emit('receive_message', {
            from: senderId,
            message
        });

        const roomId = type === 'group'
            ? `room:group:${targetId}`  // targetId is the group ID
            : `room:private:${senderId}_${targetId}`;  // targetId is the user ID

        await this.prismaService.message.create({
            data: {
                content: message,
                userId: senderId,
                roomId,
                ...(type === 'private' && { addressId: targetId })
            }
        });
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
        const userId = client.data.userId;
        await this.handleSendMessage(userId, data.type, data.targetId, data.message);
    }

    async createRoom(
        senderId: string,
        type: 'private' | 'group',
        name: string,
    ) {


        // find sender user
        const senderUser = await this.prismaService.user.findUnique({
            where: { id: senderId }
        })

        if (!senderUser) {
            throw new NotFoundException('user not found')
        }

        // find user
        const targetUser = await this.prismaService.user.findFirst({
            where: { name }
        })

        if (!targetUser) {
            throw new Error('user not found')
        }

        const room =
            type === 'group'
                ? this.getGroupRoom(senderId)
                : this.getPrivateRoom(senderId, targetUser.id)

        const roomId = type === 'group'
            ? `room:group:${senderId}`
            : `room:private:${senderId}_${targetUser.id}`

        const newGroup = await this.groupService.createGroup(senderId, senderUser?.name || '')

        return newGroup
    }
}