import { Controller, Get, Post } from '@nestjs/common';
import { CacheMetricsService } from './cache-metrics.service';
import { CustomCacheService } from './custom-cache.service';

@Controller('cache')
export class CacheController {
	constructor(
		private readonly cacheMetrics: CacheMetricsService,
		private readonly customCache: CustomCacheService
	) { }

	@Get('metrics')
	getMetrics() {
		return {
			summary: this.cacheMetrics.getSummary(),
			details: this.cacheMetrics.getAllMetrics()
		};
	}

	@Get('metrics/summary')
	getSummary() {
		return this.cacheMetrics.getSummary();
	}

	@Post('warm/frequent-users')
	async warmFrequentUsers() {
		try {
			const result = await this.customCache.warmFrequentUsersCache();
			return {
				message: 'Cache warming completed successfully',
				...result
			};
		} catch (error) {
			return {
				success: false,
				message: 'Cache warming failed',
				error: error.message
			};
		}
	}

	@Get('stats')
	async getCacheStats() {
		return await this.customCache.getCacheStats();
	}
}
