import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import type { Request } from "express";
import { Strategy } from "passport-custom";
import { AuthService } from "src/modules/auth/services/auth.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthCookieStrategy extends PassportStrategy(Strategy, "auth-cookie") {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
		private readonly jwtService: JwtService,
		private readonly prismaService: PrismaService
	) {
		super();
	}
	// Trong AuthCookieStrategy
	async validate(req: Request): Promise<any> {
		const accessToken = req.cookies?.access_token;
		if (!accessToken) throw new UnauthorizedException("Access token not found");

		const payload = await this.jwtService.verifyAsync(accessToken, {
			secret: this.configService.getOrThrow<string>("JWT_SECRET")
		});

		const user = await this.prismaService.user.findUnique({
			where: { id: payload.sub }
		});

		if (!user) throw new NotFoundException("User not found");
		return user;
	}
}
