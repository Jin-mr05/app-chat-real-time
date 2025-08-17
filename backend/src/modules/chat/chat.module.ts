import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { AuthModule } from '../auth/auth.module';
import { RoomModule } from '../room/room.module';
import { chatController } from './chat.controller';

@Module({
    imports: [CustomCacheModule, AuthModule, RoomModule],
    providers: [ChatService, ChatGateway],
    controllers: [chatController],
    exports: [ChatService]
})
export class ChatModule { }
