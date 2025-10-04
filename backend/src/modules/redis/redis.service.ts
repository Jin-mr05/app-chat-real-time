import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { REDIS_CONSTANTS } from "./redis.constants";

@Injectable()
export class RedisService {
	constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) { }

	async get<T = string>(key: string): Promise<T | null> {
		const value = await this.redis.get(key)
		try {
			return value ? (JSON.parse(value) as T) : null
		} catch (error) {
			return value as T
		}
	}

	async set<T>(key: string, value: T): Promise<void> {
		const serialized = typeof value === 'string' ? value : JSON.stringify(value);
		await this.redis.set(
			key,
			serialized,
			"EX",
			REDIS_CONSTANTS.TIME_FILE_CACHE.CACHE_LARGE_DATA
		);
	}


	async del(key: string): Promise<void> {
		await this.redis.del(key);
	}

	async incr(key: string): Promise<number> {
		return this.redis.incr(key);
	}

	async expire(key: string, ttlSeconds: number): Promise<void> {
		await this.redis.expire(key, ttlSeconds);
	}

	async flushAll(): Promise<void> {
		await this.redis.flushall();
	}
}
