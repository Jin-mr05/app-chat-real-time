import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { randomInt } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
    ) { }
    // generate tokens
    async generateToken(userId: string, email: string) {

        // create payload
        const payload = { sub: userId, email: email }

        // create accesstoken , refreshtoken
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET"),
                expiresIn: this.configService.getOrThrow<string>("ACCESS_TOKEN_TIME_LIFE")
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET"),
                expiresIn: this.configService.getOrThrow<string>("REFRESH_TOKEN_TIME_LIFE")
            })
        ])

        return { accessToken, refreshToken }
    }

    // store tokens
    async storeTokens(userId: string, hashRefreshToken: string, sessionId: string) {
        const session = await this.prismaService.session.upsert({
            where: { userId: userId },
            update: {
                hasedRefreshToken: hashRefreshToken
            },
            create: {
                userId,
                hasedRefreshToken: hashRefreshToken
            }
        })
        return session
    }

}