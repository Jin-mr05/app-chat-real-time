import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { AuthModule } from '../auth/auth.module';
import { ChatController } from './chat.controller';
import { GroupModule } from '../room/room.module';

@Module({
    imports: [CustomCacheModule, AuthModule, GroupModule],
    controllers: [ChatController],
    providers: [ChatService, ChatGateway],
    exports: [ChatService]
})
export class ChatModule { }
