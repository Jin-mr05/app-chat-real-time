import { Controller, Logger } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class EmailConsumer {
    private readonly logger = new Logger(EmailConsumer.name)

    constructor(
        private readonly emailService: EmailService
    ) { }

    @EventPattern(`email_send_register`)
    async handleSendRegister(@Payload() data: { to: string, verifyLink: string }) {
        await this.emailService.sendNotificationVerifyAccount(data.to, data.verifyLink)
    }

    @EventPattern(`email_send_change_password`)
    async handleChangePassword(@Payload() data: { to: string, username: string }) {
        await this.emailService.sendNotificationChangePassword(data.to, data.username)
    }

    @EventPattern(`email_send_delete_account`)
    async handleDeleteAccount(@Payload() data: { to: string, username: string }) {
        await this.emailService.sendNotificationDeleteAccount(data.to, data.username)
    }
}