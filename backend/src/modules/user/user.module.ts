import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ChatModule } from '../chat/chat.module';
import { GroupModule } from '../room/room.module';
import { UserService } from './user.service';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';

@Module({
    controllers: [UserController],
    imports: [ChatModule, GroupModule, CustomCacheModule],
    providers: [UserService]
})
export class UserModule { }
