import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { CustomCacheService } from 'src/modules/custom-cache/custom-cache.service';

@Injectable()
export class StartupService implements OnApplicationBootstrap {
	private readonly logger = new Logger(StartupService.name);

	constructor(
		private readonly customCache: CustomCacheService
	) { }

	async onApplicationBootstrap() {
		this.logger.log('Application is starting up...');

		// Warm cache with frequent users on startup
		try {
			this.logger.log('Starting initial cache warming...');
			const result = await this.customCache.warmFrequentUsersCache();
			this.logger.log(`Initial cache warming completed: ${result.warmedUsersCount} users pre-loaded`);
		} catch (error) {
			this.logger.error('Initial cache warming failed:', error);
		}
	}
}
