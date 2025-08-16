import { Body, Controller, Get, Post, Query, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Cookies } from "src/common/decorator/cookie.decorator";
import { Public } from "src/common/decorator/public.decorator";
import { AuthService } from "./auth.service";
import { ChangepasswordDto } from "./dto/ChangePass.dto";
import { EditDetailDto } from "./dto/EditDetail.dto";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('register')
    async register(@Body() data: RegisterDto) {
        return this.authService.register(data)
    }

    @Public()
    @Post('login')
    async login(@Body() data: LoginDto, @Res() res: Response) {
        const result = await this.authService.login(data, res)
        return res.json(result)
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: Response, @Cookies('session_id') sessionId?: string) {
        return this.authService.logout(res, sessionId)
    }

    @Public()
    @Post('send-notificaiton-account')
    async sendVerifyAccount(email: string, userName: string) {
        return this.authService.sendVerifyAccount(email, userName)
    }

    @Public()
    @Get('verify-account')
    async verifyAccount(@Query('email') email: string, @Res() res: Response) {
        return this.authService.verifyAccount(email, res)
    }

    @Post('edit-detail')
    async editDetail(@Body() data: EditDetailDto, @Req() req: Request) {
        return this.authService.editDetailAccount(data, req)
    }

    @Post('change-password')
    async changePassword(@Req() req: Request, @Body() data: ChangepasswordDto) {
        return this.authService.changePassword(req, data)
    }

    @Post('delete-account')
    async deleteAccount(@Req() req: Request) {
        return this.authService.deleteAccount(req)
    }
}