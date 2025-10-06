import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { CommonModule } from 'src/common/service/common.module';
import { RoomController } from './room.controller';
@Module({
    imports: [CommonModule],
    providers: [RoomService],
    controllers: [RoomController],
    exports: [RoomService]
})
export class RoomModule { }
