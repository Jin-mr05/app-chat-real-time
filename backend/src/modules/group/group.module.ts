import { Module, NotFoundException } from '@nestjs/common';
import { GroupService } from './group.service';
import { Request } from 'express'
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
    providers: [GroupService],
    exports: [GroupService]
})
export class GroupModule {

   

}
