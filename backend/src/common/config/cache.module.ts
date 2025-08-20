import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		CacheModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => {
				// For development - use in-memory
				if (configService.get('NODE_ENV') !== 'production') {
					return {
						ttl: 60 * 60 * 1000, // 1 hour
						max: 1000, // max items in cache
					};
				}

				// For production - use Redis
				return {
					store: await redisStore({
						socket: {
							host: configService.get('REDIS_HOST', 'localhost'),
							port: configService.get('REDIS_PORT', 6379),
						},
						password: configService.get('REDIS_PASSWORD'),
						database: configService.get('REDIS_DB', 0),
					}),
					ttl: 60 * 60 * 1000, // 1 hour
				};
			},
			inject: [ConfigService],
			isGlobal: true,
		}),
	],
})
export class CacheConfigModule { }
