import { Inject, Injectable, Logger } from "@nestjs/common";
import { User } from "prisma/generated/prisma";
import { REDIS_CONSTANTS } from "src/modules/redis/redis.constants";
import { RedisService } from "src/modules/redis/redis.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CommonService {
	private readonly logger = new Logger(CommonService.name)

	constructor(
		private readonly prismaService: PrismaService,
		@Inject("REDIS_CLIENT") private readonly redisService: RedisService
	) { }

	async checkingAvailableUser(access: string): Promise<User | null> {
		const key = REDIS_CONSTANTS.CACHE_USER(access);

		try {
			// Check cache first
			const cached = await this.redisService.get(key);
			if (cached) {
				const user: User = typeof cached === "string" ? JSON.parse(cached) : cached;
				this.logger.debug(`User found in cache: ${access}`);
				return user;
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
				// Cache the user as JSON string
				await this.redisService.set(key, JSON.stringify(availableUser));
				this.logger.debug(`User cached: ${access}`);
				return availableUser;
			}

			// Cache null to prevent repeated DB queries
			await this.redisService.set(key, "null");
			return null;
		} catch (error) {
			this.logger.error(`Error checking user availability: ${error.message}`, error.stack);
			return null; // Trả về null thay vì throw error
		}
	}
}