import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class EmailProducerService {
    constructor(
        @Inject(`EMAIL_SERVICE`) private readonly client: ClientProxy
    ) { }

    async sendNotificationRegister(data: { to: string, verifyLink: string }) {
        await this.client.emit(`email_send_register`, data)
    }

    async sendNotificationChangePassword(data: { to: string, username: string }) {
        await this.client.emit(`email_send_change_password`, data)
    }

    async sendNotificationDeleteAccount(data: { to: string, username: string }) {
        await this.client.emit(`email_send_delete_account`, data)
    }
}