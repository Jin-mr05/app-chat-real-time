import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { hash, verify } from "argon2";
import { Response } from 'express';
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";
import { TokenService } from "./token.service";
import { TicketService } from "../ticket/ticket.service";
import { EmailService } from "src/email/email.service";
import { EditDetailDto } from "./dto/EditDetail.dto";
import { Request } from 'express'
import { ChangepasswordDto } from "./dto/ChangePass.dto";

const MAX_AGE_SESSION_FILE = 10 * 365 * 24 * 60 * 60 * 1000// 10years
const MAX_AGE_REFRESH_TOKEN = 7 * 24 * 60 * 60 * 1000 // 7 days
const MAX_AGE_ACCESS_TOKEN = 60 * 60 * 1000 // 1h

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
        private readonly tokenService: TokenService,
        private readonly ticketService: TicketService,
        private readonly emailService: EmailService,
    ) { }

    // pipe data
    private parseDateString(dateStr: string): Date | null {
        // Kiểm tra định dạng yyyy/MM/dd
        const match = dateStr.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
        if (!match) return null;
        const [_, year, month, day] = match;

        const date = new Date(Number(year), Number(month) - 1, Number(day));

        if (isNaN(date.getTime())) return null;

        return date
    }


    // hashing password
    async hashPassword(password: string) {
        return await hash(password)
    }

    // validate user with accesstoken
    async validate(accessToken: string) {

        try {

            // get id in payload
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET")
            })

            // find user 
            const exitedUser = await this.prismaService.user.findUnique({
                where: { id: payload.sub }
            })

            if (!exitedUser) {
                throw new UnauthorizedException('user not found')
            }

            return exitedUser

        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error
            }
            throw new UnauthorizedException("Invalid or expired access token")
        }

    }

    // register
    async register(data: RegisterDto) {

        // checking available account
        const exitedAccount = await this.prismaService.user.findFirst({
            where: { email: data.email }
        })

        if (exitedAccount) {
            throw new UnauthorizedException('Account is already existed')
        }

        // hashing password
        const hashedPassword = await this.hashPassword(data.password)

        // create user
        const newUser = await this.prismaService.user.create({
            data: {
                email: data.email,
                hashedPassword: hashedPassword
            }
        })

        // send notification verify account
        await this.emailService.sendNotificationVerifyAccount(data.email, newUser.name || 'unknow-user', `http://localhost:4000/auth/verify-account?email=${data.email}`)

        return newUser
    }

    // create session
    async createSession(user: User, sesisonId: string, res: Response) {

        // generate tokens
        const tokens = await this.tokenService.generateToken(user.id, user.email)

        // get sessionid
        const sessionId = res.req.cookies?.session_id

        // hash refreshtoken
        const hashedRefreshToken = await hash(tokens.refreshToken)

        // store tokens
        const session = await this.tokenService.storeTokens(user.id, hashedRefreshToken, sessionId)

        // set age session 
        res.cookie('session_id', session.id, {
            maxAge: MAX_AGE_SESSION_FILE
        })

        // setup tokens
        res
            .cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: MAX_AGE_REFRESH_TOKEN,
                path: '/',
            })
            .cookie('access_token', tokens.accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: MAX_AGE_ACCESS_TOKEN,
                path: '/',
            })

        return { tokens, session }
    }

    // login
    async login(data: LoginDto, res: Response) {

        // find account
        const exitedUser = await this.prismaService.user.findFirst({
            where: { email: data.email },
            omit: { hashedPassword: false }
        })

        if (!exitedUser) {
            throw new NotFoundException('Account is not existed')
        }

        // verify password
        const isMatch = await verify(exitedUser.hashedPassword, data.password)

        if (!isMatch) {
            throw new UnauthorizedException('Password is not correct')
        }

        if (!exitedUser.isActive) {
            throw new ForbiddenException('Request active account')
        }

        // create session
        await this.createSession(exitedUser, res.req.cookies?.session_id, res)

        // set status 
        await this.ticketService.setOnline(exitedUser.id)

        const { hashedPassword, ...userWithoutPassword } = exitedUser

        return userWithoutPassword
    }

    // logout
    async logout(res: Response, sessionId?: string) {
        // delete tokens cookie
        res.clearCookie("access_token").clearCookie("refresh_token")

        // find session
        const session = await this.prismaService.session.findFirst({
            where: { id: sessionId }
        })

        const sid = sessionId || res.req.cookies?.session_id;

        console.log(sid)

        if (!sid) {
            throw new NotFoundException("Session ID is required for logout");
        }

        // delete hasedToken
        await this.prismaService.session.updateMany({
            where: { id: sid, userId: session?.userId },
            data: { hasedRefreshToken: null },
        })

        // set status
        if (!session?.userId) {
            throw new BadRequestException('User ID not found in session');
        }
        await this.ticketService.setOffline(session.userId)

        return {
            message: "Done"
        }
    }

    // send notification verify account 
    async sendVerifyAccount(email: string, userName: string) {
        // check vailable account
        const exitedAccount = await this.prismaService.user.findFirst({
            where: { email: email }
        })

        if (!exitedAccount) {
            throw new NotFoundException('Account is not existed')
        }

        // send notification verify account
        await this.emailService.sendNotificationVerifyAccount(email, userName, `http://localhost:4000/auth/verify-account?email:${email}`)
    }

    // verify account
    async verifyAccount(email: string, res: Response) {
        // update account
        await this.prismaService.user.update({
            where: { email: email },
            data: { isActive: true }
        })
        return res.send(`
            <html>
              <head><title>Verify Success</title></head>
              <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
                <h2 style="color: green">Email verified successfully!</h2>
                <p>You can now login to your account.</p>
              </body>
            </html>
          `)
    }

    // deait detail account
    async editDetailAccount(data: EditDetailDto, req: Request) {

        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id },
            select: { id: true }
        })

        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // update detail
        const newUser = await this.prismaService.user.update({
            where: { id: exitedUser.id },
            data: {
                name: data.name || null,
                birthday: this.parseDateString(data.birthDay) || null,
                gender: (data.gender) || null
            }
        })

        return newUser
    }

    // change password
    async changePassword(req: Request, data: ChangepasswordDto) {

        const author = await this.prismaService.user.findUnique({
            where: { id: req.user?.id },
            omit: { hashedPassword: false }
        })

        if (!author) {
            throw new NotFoundException('User not found');
        }

        const isMatch = await verify(author.hashedPassword, data.oldPassword)

        if (!isMatch) {
            throw new BadRequestException('Password is not match')
        }

        // hashing password
        const hashedNewPassword = await this.hashPassword(data.newPassword)

        // update new password
        await this.prismaService.user.update({
            where: { id: author.id },
            data: { hashedPassword: hashedNewPassword }
        })

        // send notification
        await this.emailService.sendNotificationChangePassword(author.email, author.name || 'unknown user')
    }

    // delete account
    async deleteAccount(req: Request) {
        
        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id },
            select: { id: true, email: true, name: true }
        })

        if(!exitedUser) {
            throw new NotFoundException('User not found')
        }

        // update status
        await this.prismaService.user.update({
            where: { id: exitedUser.id },
            data: { idDelete: true }
        })

        // send notification
        await this.emailService.sendNotificationDeleteAccount(exitedUser.email, exitedUser.name || 'unknown user')

        return {
            message: 'Delete account success'
        }
        
    }
}