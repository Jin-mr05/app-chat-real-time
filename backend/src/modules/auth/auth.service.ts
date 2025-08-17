import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException, UnauthorizedException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { Request, Response } from 'express';
import { User } from 'prisma/generated/prisma';
import { EmailProducerService } from 'src/email/email.producer';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangepasswordDto } from './dto/ChangePass.dto';
import { EditDetailDto } from './dto/EditDetail.dto';
import { LoginDto } from './dto/Login.dto';
import { RegisterDto } from './dto/Register.dto';
import { TokenService } from './token.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CustomCacheService } from '../custom-cache/custom-cache.service';
import { AUTH_CONSTANTS } from './auth.constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
        private readonly tokenService: TokenService,
        private readonly emailProducerService: EmailProducerService,
        private readonly customCache: CustomCacheService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) { }

    // Parse date string with improved validation
    private parseDateString(dateStr: string): Date | null {
        if (!dateStr) return null;

        // Support multiple date formats: yyyy/MM/dd, yyyy-MM-dd
        const match = dateStr.match(/^(\d{4})[\/\-](\d{2})[\/\-](\d{2})$/)
        if (!match) return null

        const [_, year, month, day] = match
        const date = new Date(Number(year), Number(month) - 1, Number(day))

        // Validate the date is valid and not in the future
        if (isNaN(date.getTime()) || date > new Date()) return null

        return date;
    }

    // hashing text
    async hashing(text: string) {
        return await hash(text)
    }

    // validate user with access token
    async validate(accessToken: string): Promise<User> {
        try {
            // get id from payload
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.getOrThrow<string>('JWT_SECRET'),
            });

            // find user
            const existingUser = await this.customCache.getUserByIdInCache(payload.sub);
            if (!existingUser) throw new UnauthorizedException('User not found');

            return existingUser;
        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error;
            }
            throw new UnauthorizedException('Invalid or expired access token');
        }
    }

    // register new user
    async register(data: RegisterDto) {
        // check if account already exists
        const existingAccount = await this.customCache.getUserByEmailInCache(data.email);

        if (existingAccount) throw new ForbiddenException("Account already exists")

        // hash password
        const hashedPassword = await this.hashing(data.password);

        // create user
        const newUser = await this.prismaService.user.create({
            data: {
                name: data.name,
                email: data.email,
                hashedPassword: hashedPassword,
            },
        });

        const verifyLink = `http://localhost:4000/auth/verify-account?email=${data.email}`

        // send verification email
        await this.emailProducerService.sendNotificationRegister({
            to: data.email,
            verifyLink,
        })

        return {
            success: true,
            message: 'Verification email sent. Please check your inbox.',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            },
        };
    }

    // create session
    async createSession(user: User, res: Response) {
        // generate tokens
        const tokens = await this.tokenService.generateToken(user.id, user.email)

        // hash refreshtoken
        const hashedRefreshToken = await hash(tokens.refreshToken)

        // store tokens
        const session = await this.tokenService.storeTokens(
            user.id,
            hashedRefreshToken,
        );

        // set age session
        res.cookie('session_id', session.id, {
            maxAge: AUTH_CONSTANTS.MAX_AGE_SESSION_FILE,
            ...AUTH_CONSTANTS.COOKIE_CONFIG.SESSION
        });

        // setup tokens
        res
            .cookie('refresh_token', tokens.refreshToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_ACCESS_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG.ACCESS_TOKEN
            })
            .cookie('access_token', tokens.accessToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG.REFRESH_TOKEN
            });

        return { tokens, session };
    }

    // user login
    async login(data: LoginDto, res: Response) {
        // find account
        const existingUser = await this.customCache.getUserByEmailInCache(data.email);

        if (!existingUser) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(data.email)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('Account does not exist')
        }

        // verify password
        const isMatch = await verify(existingUser.hashedPassword, data.password);

        if (!isMatch) throw new UnauthorizedException('Invalid credentials');

        if (!existingUser.isActive) {
            const verifyLink = `http://localhost:4000/auth/verify-account?email=${existingUser.email}`

            await this.emailProducerService.sendNotificationRegister({
                to: data.email,
                verifyLink,
            });
            throw new ForbiddenException('Account not activated. Verification email sent.');
        }

        // create session
        const session = await this.createSession(existingUser, res);


        // return user without password
        const { hashedPassword, ...userWithoutPassword } = existingUser;

        return {
            user: userWithoutPassword,
            token: session.tokens.accessToken,
            success: true,
        };
    }

    // logout
    async logout(res: Response, sessionId?: string) {
        // delete tokens cookie
        res.clearCookie('access_token').clearCookie('refresh_token');

        // find session
        const session = await this.prismaService.session.findFirst({
            where: { id: sessionId },
        });

        const sid = sessionId || res.req.cookies?.session_id;

        if (!sid) throw new NotFoundException('Session ID is required for logout')

        // delete hasedToken
        await this.prismaService.session.updateMany({
            where: { id: sid, userId: session?.userId },
            data: { hasedRefreshToken: null },
        });

        // set status
        if (!session?.userId) throw new BadRequestException('User ID not found in session')

        return {
            message: 'Done',
        };
    }

    // send verification email
    async sendVerifyAccount(email: string, userName: string) {
        // check if account exists
        const existingAccount = await this.customCache.getUserByEmailInCache(email);

        if (!existingAccount) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(email)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('Account does not exist');
        }

        // send verification email
        const verifyLink = `http://localhost:4000/auth/verify-account?email=${email}`
        await this.emailProducerService.sendNotificationRegister({
            to: email,
            verifyLink,
        });

        return {
            success: true,
            message: 'Verification email sent',
        };
    }

    // verify account
    async verifyAccount(email: string, res: Response) {
        // update account
        await this.prismaService.user.update({
            where: { email: email },
            data: { isActive: true },
        });
        return res.send(`
            <html>
              <head><title>Verify Success</title></head>
              <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
                <h2 style="color: green">Email verified successfully!</h2>
                <p>You can now login to your account.</p>
              </body>
            </html>
          `);
    }

    // edit user account details
    async editDetailAccount(data: EditDetailDto, req: Request) {
        // get user from request
        const userId = req.user?.id;

        if (!userId) throw new UnauthorizedException('User not authenticated')

        const existingUser = await this.customCache.getUserByIdInCache(userId);

        if (!existingUser) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('User not found');
        }

        // prepare update data
        const updateData: any = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.birthDay !== undefined) updateData.birthday = this.parseDateString(data.birthDay);
        if (data.gender !== undefined) updateData.gender = data.gender;

        // update user details
        const updatedUser = await this.prismaService.user.update({
            where: { id: existingUser.id },
            data: updateData,
        });

        // update cache
        await this.customCache.updateUserCache(userId, updatedUser);

        // return user without password
        const { hashedPassword, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }

    // change user password
    async changePassword(req: Request, data: ChangepasswordDto) {
        const userId = req.user?.id;

        if (!userId) throw new UnauthorizedException('User not authenticated')

        const user = await this.customCache.getUserByIdInCache(userId);

        if (!user) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException("User not found")
        }

        // verify old password
        const isMatch = await verify(user.hashedPassword, data.oldPassword);
        if (!isMatch) {
            throw new BadRequestException('Current password is incorrect');
        }

        // hash new password
        const hashedNewPassword = await this.hashing(data.newPassword);

        // update password
        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: { hashedPassword: hashedNewPassword },
        });

        // send notification email
        await this.emailProducerService.sendNotificationChangePassword({
            to: user.email,
            username: user.name || 'User',
        });

        // update cache
        await this.customCache.updateUserCache(user.id, updatedUser);

        return {
            success: true,
            message: 'Password changed successfully',
        };
    }

    // delete user account (soft delete)
    async deleteAccount(req: Request) {
        const userId = req.user?.id;

        if (!userId) throw new UnauthorizedException('User not authenticated');

        const existingUser = await this.customCache.getUserByIdInCache(userId);

        if (!existingUser) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('User not found')
        }

        // soft delete - mark as deleted
        await this.prismaService.user.update({
            where: { id: existingUser.id },
            data: { idDelete: true },
        });

        // send notification
        await this.emailProducerService.sendNotificationDeleteAccount({
            to: existingUser.email,
            username: existingUser.name || 'User',
        });

        // remove from cache
        const key = `account:${existingUser.id}`;
        await this.cacheManager.del(key);


        return {
            success: true,
            message: 'Account deleted successfully',
        };
    }
}
