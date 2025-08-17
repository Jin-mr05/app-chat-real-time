import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RedisIoAdapter } from './modules/chat/redis.adapter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // URL của frontend
    credentials: true, // Cho phép gửi cookies
  });

  app.use(cookieParser())

  app.use(helmet({
    noSniff: true,
  }));

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'email_queue',
      queueOptions: {
        durable: false,
      },
    },
  })
  const configService = app.get(ConfigService)
  const redisIoAdapter = new RedisIoAdapter(configService)
  await redisIoAdapter.connectToRedis()
  app.useWebSocketAdapter(redisIoAdapter)
  app.useWebSocketAdapter(redisIoAdapter)

  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
