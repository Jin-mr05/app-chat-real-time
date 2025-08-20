import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Swagger config
const swaggerConfig = new DocumentBuilder()
  .setTitle('Store backend service')
  .setDescription('Store backend service API description')
  .setVersion('1.0')
  .build()


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, documentFactory)

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

  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
