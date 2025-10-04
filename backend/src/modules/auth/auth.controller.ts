import { Body, Controller, Get, Post, Query, Req, Res, HttpStatus, HttpCode } from "@nestjs/common";
import { Request, Response } from 'express';
import { Cookies } from "src/common/decorator/cookie.decorator";
import { Public } from "src/common/decorator/public.decorator";
import { AuthService } from "./services/auth.service";
import { ChangepasswordDto } from "./dto/ChangePass.dto";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiCookieAuth } from "@nestjs/swagger";
import {
    LoginResponseDto,
    RegisterResponseDto,
    MessageResponseDto,
    TempCodeResponseDto,
    ErrorResponseDto
} from "./dto/response/AuthResponse.dto";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Register a new user',
        description: 'Create a new user account with email verification. A verification email will be sent to the provided email address.'
    })
    @ApiBody({ type: RegisterDto })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'User registered successfully, verification email sent',
        type: RegisterResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.CONFLICT,
        description: 'Email already exists',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'Account already exists',
        type: ErrorResponseDto
    })
    async register(@Body() data: RegisterDto) {
        const result = await this.authService.register(data);
        return {
            success: true,
            ...result
        };
    }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'User login',
        description: 'Authenticate user with email and password. Returns access token, refresh token, and user data. Session cookies will be set.'
    })
    @ApiBody({ type: LoginDto })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Login successful',
        type: LoginResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid credentials format',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Invalid email or password',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'Account not verified or wrong session',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
        type: ErrorResponseDto
    })
    async login(
        @Body() data: LoginDto,
        @Cookies('temp_code') code: string,
        @Res() res: Response
    ) {
        const result = await this.authService.login(data, res, code);
        return res.status(HttpStatus.OK).json({
            success: true,
            ...result
        });
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @ApiCookieAuth('session_id')
    @ApiOperation({
        summary: 'User logout',
        description: 'Logout user and invalidate current session. Clears all authentication cookies.'
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Logout successful',
        type: MessageResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid request',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Session not found',
        type: ErrorResponseDto
    })
    async logout(
        @Res({ passthrough: true }) res: Response,
        @Cookies('session_id') sessionId?: string
    ) {
        const result = await this.authService.logout(res, sessionId);
        return {
            success: true,
            ...result
        };
    }

    @Public()
    @Post('send-notification-account')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Resend verification email',
        description: 'Send or resend email verification link to user account'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    format: 'email',
                    example: 'user@example.com',
                    description: 'User email address'
                }
            },
            required: ['email']
        }
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Verification email sent successfully',
        type: MessageResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid email format',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.TOO_MANY_REQUESTS,
        description: 'Rate limit exceeded',
        type: ErrorResponseDto
    })
    async sendVerifyAccount(@Body('email') email: string) {
        const result = await this.authService.sendVerifyAccount(email);
        return {
            success: true,
            ...result
        };
    }

    @Public()
    @Get('verify-account')
    @ApiOperation({
        summary: 'Verify email account',
        description: 'Confirm email verification using email parameter. Activates user account.'
    })
    @ApiQuery({
        name: 'email',
        type: String,
        required: true,
        description: 'User email address to verify',
        example: 'user@example.com'
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Email verified successfully - Returns HTML page',
        schema: {
            type: 'string',
            example: '<html>...</html>'
        }
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid or expired verification link',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
        type: ErrorResponseDto
    })
    async verifyAccount(
        @Query('email') email: string,
        @Res() res: Response
    ) {
        return this.authService.verifyAccount(email, res);
    }

    @Post('change-password')
    @HttpCode(HttpStatus.OK)
    @ApiCookieAuth('session_id')
    @ApiOperation({
        summary: "Change user password",
        description: 'Change authenticated user password. Requires current password verification. Sends notification email.'
    })
    @ApiBody({ type: ChangepasswordDto })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Password changed successfully',
        type: MessageResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Invalid current password or password format',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'User not authenticated',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
        type: ErrorResponseDto
    })
    async changePassword(
        @Req() req: Request,
        @Body() data: ChangepasswordDto
    ) {
        const result = await this.authService.changePassword(req, data);
        return {
            success: true,
            ...result
        };
    }

    @Post('delete-account')
    @HttpCode(HttpStatus.OK)
    @ApiCookieAuth('session_id')
    @ApiOperation({
        summary: 'Delete user account',
        description: 'Soft delete authenticated user account. Marks account as deleted and sends notification email.'
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Account deleted successfully',
        type: MessageResponseDto
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'User not authenticated',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'Cannot delete account',
        type: ErrorResponseDto
    })
    async deleteAccount(@Req() req: Request) {
        const result = await this.authService.deleteAccount(req);
        return {
            success: true,
            ...result
        };
    }

    @Public()
    @Post('refresh-token')
    @HttpCode(HttpStatus.OK)
    @ApiCookieAuth('refresh_token')
    @ApiOperation({
        summary: 'Refresh access token',
        description: 'Generate new access and refresh tokens using existing refresh token from cookie. Updates session with new tokens.'
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Token refreshed successfully',
        type: MessageResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Missing refresh token or session ID',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Invalid or expired refresh token',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'Account inactive or deleted',
        type: ErrorResponseDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User or session not found',
        type: ErrorResponseDto
    })
    async refreshToken(
        @Res({ passthrough: true }) res: Response,
        @Cookies('refresh_token') cookieRefreshToken?: string,
        @Cookies('session_id') sessionId?: string
    ) {
        const result = await this.authService.refreshToken(res, cookieRefreshToken, sessionId);
        return {
            success: true,
            ...result
        };
    }

    @Public()
    @Post('create-temp-code')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Create temporary login code',
        description: 'Generate temporary code for login session. Returns JWT token and HMAC signature. Sets temp_code cookie.'
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Temporary code created successfully',
        type: TempCodeResponseDto
    })
    async createTempCode(@Res({ passthrough: true }) res: Response) {
        const result = await this.authService.createTempCode(res);
        return {
            success: true,
            message: 'Temporary code created',
            data: result
        };
    }
}