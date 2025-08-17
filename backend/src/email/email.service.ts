import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cache } from "cache-manager";
import { promises as fs } from 'fs';
import * as nodemailer from 'nodemailer';
import { join } from "path";

@Injectable()
export class EmailService {

    private readonly logger = new Logger()
    private transporter: nodemailer.Transporter
    private templateCache = new Map<string, string>()

    constructor(
        private readonly condifService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {
        // create transporter account transport
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: condifService.getOrThrow<string>("EMAIL_USER"),
                pass: condifService.getOrThrow<string>("EMAIL_PASS")
            }
        })
    }

    // get template
    async getTemplate(templateName: string) {
        if (this.templateCache.has(templateName)) {
            return this.templateCache.get(templateName)!
        }

        // fall back
        try {
            const template = join(__dirname, 'templates', `${templateName}.html`)
            const content = await fs.readFile(template, 'utf-8')
            this.templateCache.set(template, content)
            return content
        } catch (error) {
            this.logger.error(`Template not found : ${templateName}`, error)
            throw new Error(`Template ${templateName} not found`)
        }
    }

    async sendNotificationVerifyAccount(toEmail: string, linkVerify: string) {
        try {
            // get template
            const template = this.getTemplate('notification-verify-register')
            const subject = 'Verify Account'
            const html = (await template)
                .replace('{verify_link}', linkVerify)

            const mailOptions = {
                from: `"Thaiandev Service" <${this.condifService.getOrThrow<string>("EMAIL_USER")}>`,
                to: toEmail,
                subject,
                html
            }

            // send email
            await this.transporter.sendMail(mailOptions)
        } catch (error) {
            this.logger.error(`Send email failed:`, error)
            return null
        }
    }


    async sendNotificationChangePassword(toEmail: string, userName: string) {
        try {
            // get template
            const template = this.getTemplate('notification-change-password')
            const subject = 'Notification'
            const html = (await template)
                .replace('{USER_NAME}', userName)

            const mailOptions = {
                from: `"Thaiandev Service" <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html
            }

            // send email
            await this.transporter.sendMail(mailOptions)
        } catch (error) {
            this.logger.error(`Send email failed:`, error)
            return null
        }

    }

    async sendNotificationDeleteAccount(toEmail: string, userName: string) {
        try {
            // get template
            const template = this.getTemplate('notification-delete-account')
            const subject = 'Notification'
            const html = (await template)
                .replace('{USER_NAME}', userName)
            const mailOptions = {
                from: `"Thaiandev Service" <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject,
                html
            }

            // send email
            await this.transporter.sendMail(mailOptions)
        } catch (error) {
            this.logger.error(`Send email failed:`, error)
            return null
        }
    }
}