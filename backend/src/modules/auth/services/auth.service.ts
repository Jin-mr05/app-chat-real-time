import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { createHmac, randomBytes } from 'crypto';
import { Request, Response } from 'express';
import { User } from 'prisma/generated/prisma';
import { EmailProducerService } from 'src/email/email.producer';
import { PrismaService } from 'src/prisma/prisma.service';
import { REDIS_CONSTANTS } from '../../redis/redis.constants';
import { RedisService } from '../../redis/redis.service';
import { AUTH_CONSTANTS } from '../auth.constants';
import { ChangepasswordDto } from '../dto/ChangePass.dto';
import { LoginDto } from '../dto/Login.dto';
import { RegisterDto } from '../dto/Register.dto';
import { OtherService } from './other.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
        private readonly tokenService: TokenService,
        private readonly emailProducerService: EmailProducerService,
        private readonly otherService: OtherService,
        @Inject("REDIS_CLIENT") private readonly redisService: RedisService,
    ) { }

    /**
     * Hash text using Argon2
     */
    private async hashing(text: string): Promise<string> {
        return await hash(text);
    }

    /**
     * Check if user exists and is active (with caching)
     */
    private async checkingAvailableUser(access: string): Promise<User | null> {
        const key = REDIS_CONSTANTS.CACHE_USER(access);

        try {
            // Check cache first
            const cached = await this.redisService.get(key) as User;
            if (cached) {
                this.logger.debug(`User found in cache: ${access}`);
                return cached;
            }

            // Fallback to database
            const availableUser = await this.prismaService.user.findFirst({
                where: {
                    AND: [
                        {
                            OR: [
                                { email: access },
                                { id: access }
                            ]
                        },
                        { isVerified: true }
                    ]
                }
            });

            if (availableUser) {
                // Cache the user
                await this.redisService.set(key, availableUser);
                this.logger.debug(`User cached: ${access}`);
                return availableUser;
            }

            // Cache null to prevent repeated DB queries
            await this.redisService.set(key, null);
            return null;
        } catch (error) {
            this.logger.error(`Error checking user availability: ${error.message}`, error.stack);
            throw new Error(`Failed to check user availability: ${error.message}`);
        }
    }

    /**
     * Validate access token and return user
     */
    public async validate(accessToken: string): Promise<User> {
        try {
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.getOrThrow<string>('JWT_SECRET'),
            });

            const user = await this.checkingAvailableUser(payload.sub);
            if (!user) {
                throw new UnauthorizedException('User not found or inactive');
            }

            return user;
        } catch (error) {
            this.logger.error(`Token validation failed: ${error.message}`);
            if (error instanceof UnauthorizedException) {
                throw error;
            }
            throw new UnauthorizedException('Invalid or expired access token');
        }
    }

    /**
     * Register new user
     */
    async register(data: RegisterDto) {
        this.logger.log(`Registration attempt: ${data.email}`);

        // Check if account already exists
        const existingAccount = await this.checkingAvailableUser(data.email);
        if (existingAccount) {
            this.logger.warn(`Registration failed - account exists: ${data.email}`);
            throw new ForbiddenException('Account already exists');
        }

        // Hash password
        const hashedPassword = await this.hashing(data.password);

        // Create user
        const newUser = await this.prismaService.user.create({
            data: {
                fullName: data.name,
                email: data.email,
                hashedPassword: hashedPassword,
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        // Cache new user
        await this.redisService.set(
            REDIS_CONSTANTS.CACHE_USER(newUser.id),
            newUser
        );
        await this.redisService.set(
            REDIS_CONSTANTS.CACHE_USER(newUser.email),
            newUser,
        );

        // Send verification email
        const verifyLink = `${this.configService.get('APP_URL')}/auth/verify-account?email=${data.email}`;
        await this.emailProducerService.sendNotificationRegister({
            to: data.email,
            verifyLink,
        });

        this.logger.log(`User registered successfully: ${data.email}`);

        return {
            message: 'Registration successful. Please check your email to verify your account.',
            data: newUser
        };
    }

    /**
     * Create temporary login code
     */
    async createTempCode(res: Response) {
        const code = randomBytes(6).toString('hex');
        const secret = this.configService.getOrThrow<string>('JWT_SECRET');
        const hmac = createHmac('sha256', secret).update(code).digest('hex');

        res.cookie('temp_code', code, {
            httpOnly: true,
            secure: this.configService.get('NODE_ENV') === 'production',
            sameSite: 'lax',
            maxAge: AUTH_CONSTANTS.TIME_LIFE_SESSION_LOGIN,
        });

        const token = this.jwtService.sign(
            { code },
            { secret, expiresIn: '3m' },
        );

        this.logger.debug('Temporary code created');

        return { token, hmac };
    }

    /**
     * Create user session
     */
    private async createSession(
        user: { id: string; email: string },
        userdeviceId: string,
        userIp: string,
        res: Response
    ) {
        // Generate tokens
        const tokens = await this.tokenService.generateToken(user.id, user.email);

        // Hash refresh token
        const hashedRefreshToken = await hash(tokens.refreshToken);

        // Store session
        const session = await this.tokenService.storeTokens(
            user.id,
            hashedRefreshToken,
            userdeviceId,
            userIp
        );

        // Set cookies
        const cookieConfig = {
            httpOnly: true,
            secure: this.configService.get('NODE_ENV') === 'production',
            sameSite: 'lax' as const,
        };

        res
            .cookie('session_id', session.id, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_SESSION_FILE,
                ...cookieConfig
            })
            .cookie('refresh_token', tokens.refreshToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...cookieConfig
            })
            .cookie('access_token', tokens.accessToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_ACCESS_TOKEN,
                ...cookieConfig
            });

        // Clear temp code
        res.clearCookie('temp_code');

        return { tokens, session };
    }

    /**
     * User login
     */
    async login(data: LoginDto, res: Response, code: string) {
        this.logger.log(`Login attempt: ${data.email}`);

        // Verify temp code
        const secret = this.configService.getOrThrow<string>('JWT_SECRET');
        try {
            await this.jwtService.verifyAsync(code, { secret });
            const decodeHmac = createHmac('sha256', secret).update(code).digest('hex');

            if (data.hmac !== decodeHmac) {
                this.logger.warn(`Invalid session login: ${data.email}`);
                throw new ForbiddenException('Invalid session login');
            }
        } catch (error) {
            this.logger.warn(`Session verification failed: ${data.email}`);
            throw new ForbiddenException('Session expired or invalid');
        }

        // Find user
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: data.email },
            select: {
                id: true,
                fullName: true,
                email: true,
                hashedPassword: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
                isDeleted: true
            }
        });

        if (!existingUser) {
            this.logger.warn(`Login failed - user not found: ${data.email}`);
            throw new NotFoundException('Invalid email or password');
        }

        // Verify password
        const isMatch = await verify(existingUser.hashedPassword, data.password);
        if (!isMatch) {
            this.logger.warn(`Login failed - invalid password: ${data.email}`);
            throw new UnauthorizedException('Invalid email or password');
        }

        // Check if account is active
        if (!existingUser.isVerified) {
            const verifyLink = `${this.configService.get('APP_URL')}/auth/verify-account?email=${existingUser.email}`;

            await this.emailProducerService.sendNotificationRegister({
                to: data.email,
                verifyLink,
            });

            this.logger.warn(`Login failed - account not verified: ${data.email}`);
            throw new ForbiddenException('Account not verified. Verification email resent.');
        }

        // Check if account is deleted
        if (existingUser.isDeleted) {
            this.logger.warn(`Login failed - account deleted: ${data.email}`);
            throw new ForbiddenException('Account has been deleted');
        }

        // Get device info
        const device = await this.otherService.getDeviceInfo(res.req);

        // Create session
        const session = await this.createSession(
            { id: existingUser.id, email: existingUser.email },
            device.device,
            device.ip,
            res
        );

        // Remove password from response
        const { hashedPassword, ...userWithoutPassword } = existingUser;

        this.logger.log(`Login successful: ${data.email}`);

        return {
            message: 'Login successful',
            data: userWithoutPassword,
            '@accessToken': session.tokens.accessToken,
            '@refreshToken': session.tokens.refreshToken,
            '@sessionId': session.session.id
        };
    }

    /**
     * Logout user
     */
    public async logout(res: Response, sessionId?: string) {
        const sid = sessionId || res.req.cookies?.session_id;

        if (!sid) {
            throw new BadRequestException('Session ID is required for logout');
        }

        // Find and invalidate session
        const session = await this.prismaService.session.findUnique({
            where: { id: sid },
            select: { userId: true }
        });

        if (!session?.userId) {
            this.logger.warn(`Logout failed - invalid session: ${sid}`);
            throw new NotFoundException('Invalid session');
        }

        // Delete refresh token from session
        await this.prismaService.session.update({
            where: { id: sid },
            data: { hashedRefreshToken: null },
        });

        // Clear cookies
        res.clearCookie('access_token', { path: '/' });
        res.clearCookie('refresh_token', { path: '/' });
        res.clearCookie('session_id', { path: '/' });

        this.logger.log(`User logged out: ${session.userId}`);

        return {
            message: 'Logout successful',
            data: null
        };
    }

    /**
     * Send verification email
     */
    public async sendVerifyAccount(email: string) {
        this.logger.log(`Verification email request: ${email}`);

        // Find user (including inactive)
        const user = await this.prismaService.user.findUnique({
            where: { email },
            select: { id: true, email: true, isVerified: true }
        });

        if (!user) {
            throw new NotFoundException('Account does not exist');
        }

        if (user.isVerified) {
            return {
                message: 'Account is already verified',
            };
        }

        // Send verification email
        const verifyLink = `${this.configService.get('APP_URL')}/auth/verify-account?email=${email}`;
        await this.emailProducerService.sendNotificationRegister({
            to: email,
            verifyLink,
        });

        this.logger.log(`Verification email sent: ${email}`);

        return {
            message: 'Verification email sent successfully',
        };
    }

    /**
     * Verify account
     */
    public async verifyAccount(email: string, res: Response) {
        this.logger.log(`Account verification: ${email}`);

        // Update account status
        const updatedUser = await this.prismaService.user.update({
            where: { email: email },
            data: { isVerified: true },
            select: {
                id: true,
                email: true,
                fullName: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        // Update cache
        await Promise.all([
            this.redisService.set(
                REDIS_CONSTANTS.CACHE_USER(updatedUser.id),
                updatedUser,
            ),
            this.redisService.set(
                REDIS_CONSTANTS.CACHE_USER(updatedUser.email),
                updatedUser,
            )
        ]);

        this.logger.log(`Account verified successfully: ${email}`);

        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Verified</title>
                <style>
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                  }
                  .container {
                    background: white;
                    color: #333;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                    max-width: 500px;
                    margin: 0 auto;
                  }
                  h2 { color: #28a745; margin-bottom: 20px; }
                  p { font-size: 16px; line-height: 1.6; }
                  .checkmark {
                    font-size: 64px;
                    color: #28a745;
                    margin-bottom: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="checkmark">✓</div>
                  <h2>Email Verified Successfully!</h2>
                  <p>Your account has been verified. You can now login to your account.</p>
                  <p style="margin-top: 30px; font-size: 14px; color: #666;">
                    You can close this window now.
                  </p>
                </div>
              </body>
            </html>
        `);
    }

    /**
     * Change user password
     */
    public async changePassword(req: Request, data: ChangepasswordDto) {
        const userId = req.user?.id;

        if (!userId) {
            throw new UnauthorizedException('User not authenticated');
        }

        this.logger.log(`Password change request: ${userId}`);

        // Find user
        const existingUser = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                hashedPassword: true,
            }
        });

        if (!existingUser) {
            throw new NotFoundException('User not found');
        }

        // Verify old password
        const isMatch = await verify(existingUser.hashedPassword, data.oldPassword);
        if (!isMatch) {
            this.logger.warn(`Password change failed - incorrect old password: ${userId}`);
            throw new BadRequestException('Current password is incorrect');
        }

        // Check if new password is same as old
        const isSamePassword = await verify(existingUser.hashedPassword, data.newPassword);
        if (isSamePassword) {
            throw new BadRequestException('New password must be different from current password');
        }

        // Hash new password
        const hashedNewPassword = await this.hashing(data.newPassword);

        // Update password
        await this.prismaService.user.update({
            where: { id: existingUser.id },
            data: { hashedPassword: hashedNewPassword },
        });

        // Invalidate all sessions
        await this.prismaService.session.updateMany({
            where: { userId: existingUser.id },
            data: { hashedRefreshToken: null },
        });

        // Send notification email
        await this.emailProducerService.sendNotificationChangePassword({
            to: existingUser.email,
            username: existingUser.fullName || 'User',
        });

        this.logger.log(`Password changed successfully: ${userId}`);

        return {
            message: 'Password changed successfully. Please login again.',
        };
    }

    /**
     * Delete user account (soft delete)
     */
    public async deleteAccount(req: Request) {
        const userId = req.user?.id;

        if (!userId) {
            throw new UnauthorizedException('User not authenticated');
        }

        this.logger.log(`Account deletion request: ${userId}`);

        const existingUser = await this.checkingAvailableUser(userId);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }

        // Soft delete - mark as deleted
        await this.prismaService.user.update({
            where: { id: existingUser.id },
            data: { isDeleted: true },
        });

        // Invalidate all sessions
        await this.prismaService.session.updateMany({
            where: { userId: existingUser.id },
            data: { hashedRefreshToken: null },
        });

        // Clear cache
        await Promise.all([
            this.redisService.del(REDIS_CONSTANTS.CACHE_USER(existingUser.id)),
            this.redisService.del(REDIS_CONSTANTS.CACHE_USER(existingUser.email))
        ]);

        // Send notification email
        await this.emailProducerService.sendNotificationDeleteAccount({
            to: existingUser.email,
            username: existingUser.fullName || 'User',
        });

        this.logger.log(`Account deleted successfully: ${userId}`);

        return {
            message: 'Account deleted successfully',
        };
    }

    /**
     * Refresh access token
     */
    public async refreshToken(res: Response, refreshToken?: string, sessionId?: string) {
        if (!refreshToken || !sessionId) {
            throw new UnauthorizedException('Refresh token or session ID not found');
        }

        this.logger.debug(`Token refresh request: ${sessionId}`);

        // Find session
        const session = await this.prismaService.session.findUnique({
            where: { id: sessionId },
            select: {
                id: true,
                userId: true,
                hashedRefreshToken: true,
            }
        });

        if (!session || !session.hashedRefreshToken) {
            throw new UnauthorizedException('Invalid session');
        }

        // Verify refresh token
        const isValidRefreshToken = await verify(session.hashedRefreshToken, refreshToken);
        if (!isValidRefreshToken) {
            this.logger.warn(`Invalid refresh token: ${sessionId}`);
            throw new UnauthorizedException('Invalid refresh token');
        }

        // Get user
        const existingUser = await this.checkingAvailableUser(session.userId);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }

        // Check if user is active
        if (!existingUser.isVerified || existingUser.isDeleted) {
            throw new ForbiddenException('Account is not active or has been deleted');
        }

        // Generate new tokens
        const tokens = await this.tokenService.generateToken(existingUser.id, existingUser.email);

        // Hash new refresh token
        const hashedRefreshToken = await hash(tokens.refreshToken);

        // Update session
        await this.prismaService.session.update({
            where: { id: sessionId },
            data: { hashedRefreshToken: hashedRefreshToken },
        });

        // Set new cookies
        const cookieConfig = {
            httpOnly: true,
            secure: this.configService.get('NODE_ENV') === 'production',
            sameSite: 'lax' as const,
        };

        res
            .cookie('refresh_token', tokens.refreshToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_REFRESH_TOKEN,
                ...cookieConfig
            })
            .cookie('access_token', tokens.accessToken, {
                maxAge: AUTH_CONSTANTS.MAX_AGE_ACCESS_TOKEN,
                ...cookieConfig
            });

        this.logger.debug(`Token refreshed successfully: ${sessionId}`);

        return {
            message: 'Token refreshed successfully',
            data: null,
        };
    }
}
