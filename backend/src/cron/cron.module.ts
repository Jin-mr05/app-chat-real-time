import { Module } from '@nestjs/common';
import { TasksService } from './corn.service';
import { CustomCacheModule } from 'src/modules/custom-cache/custom-cache.module';

@Module({
	imports: [CustomCacheModule],
	providers: [TasksService],
	exports: [TasksService]
})
export class CronModule { }
