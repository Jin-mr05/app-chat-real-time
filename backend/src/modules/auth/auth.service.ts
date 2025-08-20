import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException, UnauthorizedException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { Cache } from 'cache-manager';
import { Request, Response } from 'express';
import { User } from 'prisma/generated/prisma';
import { EmailProducerService } from 'src/email/email.producer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomCacheService } from '../custom-cache/custom-cache.service';
import { AUTH_CONSTANTS } from './auth.constants';
import { ChangepasswordDto } from './dto/ChangePass.dto';
import { EditDetailDto } from '../user/dto/EditDetail.dto';
import { LoginDto } from './dto/Login.dto';
import { RegisterDto } from './dto/Register.dto';
import { TokenService } from './token.service';

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

    // hashing text
    private async hashing(text: string) {
        return await hash(text)
    }

    // validate user with access token
    public async validate(accessToken: string): Promise<User> {
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
    public async register(data: RegisterDto) {
        // check if account already exists
        const existingAccount = await this.customCache.getUserByEmailInCache(data.email)

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
        })

        // cache new user
        const userIdKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(newUser.id);
        const userEmailKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(newUser.email);
        await this.cacheManager.set(userIdKey, newUser, AUTH_CONSTANTS.MAX_AGE_CACHE);
        await this.cacheManager.set(userEmailKey, newUser, AUTH_CONSTANTS.MAX_AGE_CACHE);

        const verifyLink = `http://localhost:4000/auth/verify-account?email=${data.email}`

        // send verification email
        await this.emailProducerService.sendNotificationRegister({
            to: data.email,
            verifyLink,
        })

        return {
            message: 'Register user successful, Verification email sent',
            data: newUser
        }
    }

    // create session
    private async createSession(user: { id: string, email: string }, res: Response) {
        // generate tokens
        const tokens = await this.tokenService.generateToken(user.id, user.email)

        // hash refreshtoken
        const hashedRefreshToken = await hash(tokens.refreshToken)

        // store tokens
        const session = await this.tokenService.storeTokens(user.id, hashedRefreshToken)

        // set session
        res
            .cookie('session_id', session.id, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_SESSION_FILE,
                ...AUTH_CONSTANTS.COOKIE_CONFIG
            })
            .cookie('refresh_token', tokens.refreshToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG
            })
            .cookie('access_token', tokens.accessToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG
            })

        return { tokens, session }
    }

    // user login
    public async login(data: LoginDto, res: Response) {
        // find account
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: data.email },
            omit: { hashedPassword: false }
        })

        if (!existingUser) throw new NotFoundException("Email or password is not correct")

        // verify password
        const isMatch = await verify(existingUser.hashedPassword, data.password)

        if (!isMatch) throw new UnauthorizedException('Invalid credentials')

        if (!existingUser.isActive) {
            const verifyLink = `http://localhost:4000/auth/verify-account?email=${existingUser.email}`

            await this.emailProducerService.sendNotificationRegister({
                to: data.email,
                verifyLink,
            })
            throw new ForbiddenException('Account not activated. Verification email sent.')
        }

        // create session
        const session = await this.createSession(existingUser, res)

        // warm cache for this user (async, don't wait)
        this.customCache.warmUserCache(existingUser.id).catch(err => {
            console.error('Cache warming failed:', err)
        })

        // return user without password
        const { hashedPassword, ...userWithoutPassword } = existingUser

        return {
            message: 'Login successful',
            data: userWithoutPassword,
            '@accessToken': session.tokens.accessToken,
            '@refreshToken': session.tokens.refreshToken,
            '@sessionId': session.session.id
        }
    }

    // logout
    public async logout(res: Response, sessionId?: string) {
        // find session
        const session = await this.prismaService.session.findUnique({
            where: { id: sessionId },
        })

        const sid = sessionId || res.req.cookies?.session_id;

        if (!sid) throw new NotFoundException('Session ID is required for logout')

        // delete hasedToken
        await this.prismaService.session.updateMany({
            where: { id: sid, userId: session?.userId },
            data: { hashedRefreshToken: null },
        });

        if (!session?.userId) throw new BadRequestException('User ID not found in session')

        // delete tokens cookie
        res.clearCookie('access_token', { path: '/' })
            .clearCookie('refresh_token', { path: '/' })
            .clearCookie('session_id', { path: '/' })
        return {
            message: 'Logout successful',
            data: null
        }
    }

    // send verification email
    public async sendVerifyAccount(email: string, userName: string) {
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
    public async verifyAccount(email: string, res: Response) {
        // update account
        const updatedUser = await this.prismaService.user.update({
            where: { email: email },
            data: { isActive: true },
        });

        // update cache
        const userIdKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(updatedUser.id);
        const userEmailKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(updatedUser.email);
        await this.cacheManager.set(userIdKey, updatedUser, AUTH_CONSTANTS.MAX_AGE_CACHE);
        await this.cacheManager.set(userEmailKey, updatedUser, AUTH_CONSTANTS.MAX_AGE_CACHE);

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

    // change user password
    public async changePassword(req: Request, data: ChangepasswordDto) {
        const userId = req.user?.id

        if (!userId) throw new UnauthorizedException('User not authenticated')

        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId },
            omit: { hashedPassword: false }
        })

        if (!exitingUser) throw new NotFoundException("User not found")

        // verify old password
        const isMatch = await verify(exitingUser.hashedPassword, data.oldPassword);
        if (!isMatch)  throw new BadRequestException('Current password is incorrect')

        // hash new password
        const hashedNewPassword = await this.hashing(data.newPassword);

        // update password
        const updatedUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: { hashedPassword: hashedNewPassword },
        });

        // send notification email
        await this.emailProducerService.sendNotificationChangePassword({
            to: exitingUser.email,
            username: exitingUser.name || 'User',
        });

        // update cache
        await this.customCache.updateUserCache(exitingUser.id, updatedUser);

        return {
            success: true,
            message: 'Password changed successfully',
        };
    }

    // delete user account (soft delete)
    public async deleteAccount(req: Request) {
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

        // remove from cache - use correct keys
        const userIdKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(existingUser.id);
        const userEmailKey = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithEmail(existingUser.email);
        await this.cacheManager.del(userIdKey);
        await this.cacheManager.del(userEmailKey);

        return {
            success: true,
            message: 'Account deleted successfully',
        };
    }

    // refresh access token using refresh token
    public async refreshToken(req: Request, res: Response, refreshToken?: string, sessionId?: string) {
        if (!refreshToken || !sessionId) throw new UnauthorizedException('Refresh token or session ID not found')

        // find session
        const session = await this.prismaService.session.findUnique({
            where: { id: sessionId }
        })

        if (!session || !session.hashedRefreshToken) throw new UnauthorizedException('Invalid session')

        // verify refresh token
        const isValidRefreshToken = await verify(session.hashedRefreshToken, refreshToken)
        if (!isValidRefreshToken) throw new UnauthorizedException('Invalid refresh token')

        // get user from cache
        const existingUser = await this.customCache.getUserByIdInCache(session.userId)

        if (!existingUser) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(session.userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('User not found')
        }

        // check if user is active
        if (!existingUser.isActive || existingUser.idDelete) throw new ForbiddenException('Account is not active or has been deleted')

        // generate new tokens
        const tokens = await this.tokenService.generateToken(existingUser.id, existingUser.email)

        // hash new refresh token
        const hashedRefreshToken = await hash(tokens.refreshToken)

        // update session with new refresh token
        await this.prismaService.session.update({
            where: { id: sessionId },
            data: { hashedRefreshToken: hashedRefreshToken },
        })

        // set new cookies
        res
            .cookie('refresh_token', tokens.refreshToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG
            })
            .cookie('access_token', tokens.accessToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...AUTH_CONSTANTS.COOKIE_CONFIG
            })

        return {
            message: 'Refreshed',
            data: null,
        }
    }
}
