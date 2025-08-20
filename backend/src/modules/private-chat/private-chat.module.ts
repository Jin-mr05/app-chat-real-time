import { Module } from '@nestjs/common';
import { PrivateChatService } from './private-chat.service';
import { PrivateChatGateway } from './private-chat.gateway';
import { PrivateChatEventListener } from './private-chat.listener';
import { PrivateChatGatewayService } from './services/private-chat-gateway.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('JWT_SECRET'),
				signOptions: { expiresIn: '1d' },
			}),
		}),
	],
	providers: [
		PrivateChatService,
		PrivateChatGateway,
		PrivateChatEventListener,
		PrivateChatGatewayService
	],
	exports: [PrivateChatService, PrivateChatGateway]
})
export class PrivateChatModule { }
