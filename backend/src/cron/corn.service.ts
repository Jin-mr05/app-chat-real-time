
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {

    constructor(
        private readonly prismaService: PrismaService
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
        })

    }
}
