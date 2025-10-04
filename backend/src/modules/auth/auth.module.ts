import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthCookieStrategy } from 'src/common/strategy/auth.cookie.strategy';
import { EmailModule } from 'src/email/email.module';
import { RedisModule } from '../redis/redis.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { OtherService } from './services/other.service';

@Module({
    imports: [
        ConfigModule, EmailModule, RedisModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '1d' },
            }),
        }),
    ],
    providers: [AuthService, TokenService, AuthCookieStrategy, OtherService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }
