import { Body, Controller, Get, Post, Query, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Cookies } from "src/common/decorator/cookie.decorator";
import { Public } from "src/common/decorator/public.decorator";
import { AuthService } from "./auth.service";
import { ChangepasswordDto } from "./dto/ChangePass.dto";
import { EditDetailDto } from "../user/dto/EditDetail.dto";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('register')
    @ApiOperation({
        summary: 'Register a new user',
        description: 'Create a new user account and send verification email'
    })
    @ApiBody({
        type: RegisterDto,
        description: 'User registration data'
    })
    @ApiResponse({
        status: 201,
        description: 'User registered successfully, verification email sent',
        schema: {
            example: {
                success: true,
                message: 'Register user successful, Verification email sent',
                data: {
                    id: 'user-id',
                    email: 'user@example.com',
                    userName: 'username'
                }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 409, description: 'Conflict - Email or username already exists' })
    async register(@Body() data: RegisterDto) {
        return this.authService.register(data)
    }

    @Public()
    @Post('login')
    @ApiOperation({
        summary: 'User login',
        description: 'Authenticate user and return access token'
    })
    @ApiBody({
        type: LoginDto,
        description: 'User login credentials'
    })
    @ApiResponse({
        status: 200,
        description: 'Login successful',
        schema: {
            example: {
                success: true,
                message: 'Login successful',
                data: {
                    user: {
                        id: 'user-id',
                        email: 'user@example.com',
                        userName: 'username'
                    },
                    accessToken: 'jwt-token'
                }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid credentials' })
    @ApiResponse({ status: 401, description: 'Unauthorized - Invalid email or password' })
    @ApiResponse({ status: 403, description: 'Forbidden - Account not verified' })
    async login(@Body() data: LoginDto, @Res() res: Response) {
        const result = await this.authService.login(data, res)
        return res.json(result)
    }

    @Post('logout')
    @ApiOperation({
        summary: 'User logout',
        description: 'Logout user and invalidate session'
    })
    @ApiResponse({
        status: 200,
        description: 'Logout successful',
        schema: {
            example: {
                success: true,
                message: 'Logout successful'
            }
        }
    })
    @ApiResponse({ status: 401, description: 'Unauthorized - Invalid session' })
    async logout(@Res({ passthrough: true }) res: Response, @Cookies('session_id') sessionId?: string) {
        return this.authService.logout(res, sessionId)
    }

    @Public()
    @Post('send-notification-account')
    @ApiOperation({
        summary: 'Send email verification',
        description: 'Send verification email to user account'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    format: 'email',
                    example: 'user@example.com'
                },
                userName: {
                    type: 'string',
                    example: 'username'
                }
            },
            required: ['email', 'userName']
        },
        description: 'Email and username for verification'
    })
    @ApiResponse({
        status: 200,
        description: 'Verification email sent successfully',
        schema: {
            example: {
                success: true,
                message: 'Verification email sent'
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid email format' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiResponse({ status: 429, description: 'Too many requests - Rate limit exceeded' })
    async sendVerifyAccount(@Body() body: { email: string, userName: string }) {
        return this.authService.sendVerifyAccount(body.email, body.userName)
    }

    @Public()
    @Get('verify-account')
    @ApiOperation({
        summary: 'Verify email account',
        description: 'Confirm email verification using verification token'
    })
    @ApiQuery({
        name: 'email',
        type: String,
        required: true,
        description: 'User email address',
        example: 'user@example.com'
    })
    @ApiResponse({
        status: 200,
        description: 'Email verified successfully',
        schema: {
            example: {
                success: true,
                message: 'Email verified successfully'
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid or expired token' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async verifyAccount(@Query('email') email: string, @Res() res: Response) {
        return this.authService.verifyAccount(email, res)
    }

    @Post('change-password')
    @ApiOperation({
        summary: "Change user password",
        description: 'Change user password with current password verification'
    })
    @ApiBody({
        type: ChangepasswordDto,
        description: 'Password change data'
    })
    @ApiResponse({
        status: 200,
        description: 'Password changed successfully',
        schema: {
            example: {
                success: true,
                message: 'Password changed successfully'
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid current password or same password' })
    @ApiResponse({ status: 401, description: 'Unauthorized - Current password is incorrect' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async changePassword(@Req() req: Request, @Body() data: ChangepasswordDto) {
        return this.authService.changePassword(req, data)
    }

    @Post('delete-account')
    @ApiOperation({
        summary: 'Delete user account',
        description: 'Permanently delete user account and all associated data'
    })
    @ApiResponse({
        status: 200,
        description: 'Account deleted successfully',
        schema: {
            example: {
                success: true,
                message: 'Account deleted successfully'
            }
        }
    })
    @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiResponse({ status: 403, description: 'Forbidden - Cannot delete account' })
    async deleteAccount(@Req() req: Request) {
        return this.authService.deleteAccount(req)
    }

    @Public()
    @Post('refresh-token')
    @ApiOperation({
        summary: 'Refresh access token',
        description: 'Generate new access token using refresh token from cookie or body'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                refreshToken: {
                    type: 'string',
                    description: 'Valid refresh token (optional if using cookie)',
                    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                }
            }
        },
        description: 'Refresh token data (optional if cookie is used)',
        required: false
    })
    @ApiResponse({
        status: 200,
        description: 'Token refreshed successfully',
        schema: {
            example: {
                success: true,
                message: 'Token refreshed successfully',
                data: {
                    accessToken: 'new-jwt-access-token',
                    refreshToken: 'new-jwt-refresh-token',
                    expiresIn: 3600,
                    user: {
                        id: 'user-id',
                        email: 'user@example.com',
                        userName: 'username',
                        fullName: 'User Full Name'
                    }
                }
            }
        }
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request - Missing or invalid refresh token',
        schema: {
            example: {
                success: false,
                message: 'Refresh token is required',
                error: 'MISSING_REFRESH_TOKEN'
            }
        }
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized - Refresh token expired or invalid',
        schema: {
            example: {
                success: false,
                message: 'Refresh token is expired or invalid',
                error: 'INVALID_REFRESH_TOKEN'
            }
        }
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden - Refresh token revoked',
        schema: {
            example: {
                success: false,
                message: 'Refresh token has been revoked',
                error: 'REFRESH_TOKEN_REVOKED'
            }
        }
    })
    @ApiResponse({
        status: 404,
        description: 'User not found',
        schema: {
            example: {
                success: false,
                message: 'User not found',
                error: 'USER_NOT_FOUND'
            }
        }
    })
    async refreshToken(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
        @Cookies('refresh_token') cookieRefreshToken?: string,
        @Cookies('session_id') sessionId?: string
    ) {
        return this.authService.refreshToken(req, res, cookieRefreshToken, sessionId)
    }
}