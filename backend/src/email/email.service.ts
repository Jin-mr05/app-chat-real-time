import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { existsSync } from "fs";
import * as nodemailer from 'nodemailer';
import { join } from "path";
import { readFile } from "fs/promises";

@Injectable()
export class EmailService {

    // set transporter
    private transportter: nodemailer.Transporter

    constructor(condifService: ConfigService) {
        // create transporter account
        this.transportter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: condifService.getOrThrow<string>("EMAIL_USER"),
                pass: condifService.getOrThrow<string>("EMAIL_PASS")
            }
        })
    }

    // func get template
    async getTemplate(htmlFile: string) {
        // get file path
        const filePath = join(__dirname, 'templates', `${htmlFile}.html`)

        if (!existsSync(filePath)) {
            throw new Error(`Template not found: ${filePath}`)
        }

        // reading file
        return await readFile(filePath, 'utf-8')
    }

    async sendNotificationVerifyAccount(toEmail: string, userName: string, linkVerify: string) {

        // get template
        const template = this.getTemplate('notification-verify-register')
        const subject = 'Verify Account'
        const html = (await template)
            .replace('{LINK_VERIFY}', linkVerify)
            .replace('{USER_NAME}', userName)

        const mailOptions = {
            from: `"Thaiandev Service" <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject,
            html
        }

        // send email
        await this.transportter.sendMail(mailOptions)
    }


    async sendNotificationChangePassword(toEmail: string, userName: string) {

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
        await this.transportter.sendMail(mailOptions)
    }

        async sendNotificationDeleteAccount(toEmail: string, userName: string) {

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
        await this.transportter.sendMail(mailOptions)
    }
}