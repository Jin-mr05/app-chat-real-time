import { Module } from '@nestjs/common';
import { TasksService } from './corn.service';

@Module({
	providers: [TasksService],
	exports: [TasksService]
})
export class CronModule { }
