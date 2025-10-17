import { Module } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { MessageService } from "./service/message/message.service";
import { CommonModule } from "src/common/service/common.module";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MessageProducer } from "./service/message/messgae.producer";
import { MessageConsumer } from "./service/message/message.consumer";

@Module({
	imports: [CommonModule,
		ClientsModule.register([
			{
				name: 'MESSAGE_QUEUE',
				transport: Transport.RMQ,
				options: {
					urls: ['amqp://localhost:5672'],
					queue: 'message_queue',
					queueOptions: {
						durable: true, // giữ tin nhắn nếu server down
					},
				}
			}
		])
	],
	controllers: [MessageConsumer],
	providers: [ChatService, MessageService, MessageProducer],
})
export class ChatModule { }