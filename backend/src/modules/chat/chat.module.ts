import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/custom-cache.module';
import { ChatService } from './chat.service';

@Module({
    imports: [CustomCacheModule],
    providers: [ChatService],
    exports: [ChatService]
})
export class ChatModule {}
