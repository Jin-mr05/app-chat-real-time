import { Module } from '@nestjs/common';
import { RoomModule } from '../room/room.module';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { CommonModule } from 'src/common/service/common.module';
import { UserSearchService } from './services/user.search.service';

@Module({
    controllers: [UserController],
    imports: [RoomModule, CommonModule],
    providers: [UserService, UserSearchService]
})
export class UserModule { }
