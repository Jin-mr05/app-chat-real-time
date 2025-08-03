import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ChatModule } from '../chat/chat.module';

@Module({
    controllers: [UserController],
    imports: [ChatModule]
})
export class UserModule {}
