import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from "@nestjs/websockets";
import { TicketService } from "./ticket.service";
import { Request } from 'express'
@WebSocketGateway({
    cros: true
})

export class SocketGateWay implements OnGatewayConnection, OnGatewayDisconnect {

    constructor(
        private readonly ticketService: TicketService
    ) {}

    async handleConnection(req: Request) {
        // get userid
        const userId = req.user?.id

        if(userId) {
            await this.ticketService.setOnline(userId)
            console.log('user online', userId)
        }

    }
    async handleDisconnect(req: Request) {
        // get userid
        const userId = req.user?.id

        if(userId) {
            await this.ticketService.setOffline(userId)
            console.log('user offline', userId)
        }
    }
    
}