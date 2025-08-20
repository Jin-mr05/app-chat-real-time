
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';
import { CacheMetricsService } from 'src/modules/custom-cache/cache-metrics.service';
import { CustomCacheService } from 'src/modules/custom-cache/custom-cache.service';

@Injectable()
export class TasksService {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly cacheMetrics: CacheMetricsService,
        private readonly customCache: CustomCacheService
    ) { }

    private readonly logger = new Logger(TasksService.name);


    @Cron('0 0 12 * * *')
    async handleCron() {
        // handle delete account if available time to recover is expired
        await this.prismaService.user.deleteMany({
            where: {
                idDelete: true,
                deleteAt: {
                    lt: new Date()
                }
            }
        });
    }

    // Log cache metrics every hour
    @Cron('0 0 * * * *')
    async logCacheMetrics() {
        this.cacheMetrics.logSummary();
    }

    // Warm cache for frequent users every 2 hours
    @Cron('0 0 */2 * * *')
    async warmFrequentUsersCache() {
        try {
            this.logger.log('Starting cache warming for frequent users...');
            const result = await this.customCache.warmFrequentUsersCache();
            this.logger.log(`Cache warming completed: ${result.warmedUsersCount} users cached`);
        } catch (error) {
            this.logger.error('Cache warming failed:', error);
        }
    }

    // Warm cache at application startup (run once on startup)
    @Cron('0 0 6 * * *') // Every day at 6 AM
    async dailyCacheWarmup() {
        try {
            this.logger.log('Starting daily cache warmup...');
            const result = await this.customCache.warmFrequentUsersCache();
            this.logger.log(`Daily cache warmup completed: ${result.warmedUsersCount} users pre-loaded`);
        } catch (error) {
            this.logger.error('Daily cache warmup failed:', error);
        }
    }
}
