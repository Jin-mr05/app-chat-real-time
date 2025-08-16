import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { Cache } from "cache-manager";
import { NextFunction, Request, Response } from 'express'
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";

const MAX_AGE_CACHE = 60 * 1000 // 60s

@Injectable()
export class HandleNotFoundUserMiddleware implements NestMiddleware {

	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		private readonly prismaService: PrismaService
	) { }

	async use(req: Request, res: Response, next: NextFunction) {
		const userId = req.user?.id
		const key = `account:${userId}`
		const cached = await this.cacheManager.get(key) as User

		if (cached == null) return next()

		// fall back 
		const exitingUser = await this.prismaService.user.findUnique({
			where: { id: userId }
		})

		if (!exitingUser) {
			// fall back set cache 
			const newCache = await this.cacheManager.set(key, null, MAX_AGE_CACHE)
			return res.status(404).json({ message: 'User not found' })
		}

		return next()
	}
}

