import { Module } from '@nestjs/common';
import { CustomCacheService } from './custom-cache.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CacheMetricsService } from './cache-metrics.service';
import { CacheController } from './cache.controller';

@Module({
    imports: [PrismaModule],
    controllers: [CacheController],
    providers: [CustomCacheService, CacheMetricsService],
    exports: [CustomCacheService, CacheMetricsService],
})
export class CustomCacheModule { }
