import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { RoomModule } from '../room/room.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    imports: [CustomCacheModule, RoomModule],
    providers: [UserService]
})
export class UserModule { }
