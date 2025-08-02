import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { TokenService } from './token.service';
import { AuthCookieStrategy } from 'src/common/strategy/auth.cookie.strategy';
import { TicketModule } from '../ticket/ticket.module';
import { EmailModule } from 'src/email/email.module';

@Module({
    imports: [
        ConfigModule, TicketModule, EmailModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '1d' },
            }),
        }),
    ],
    providers: [AuthService, TokenService, AuthCookieStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }
