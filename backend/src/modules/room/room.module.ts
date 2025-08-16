import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { RoomService } from './room.service';
@Module({
    imports: [CustomCacheModule],
    providers: [RoomService],
    exports: [RoomService]
})
export class GroupModule { }
