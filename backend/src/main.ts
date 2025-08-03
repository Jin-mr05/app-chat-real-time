import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình CORS để cho phép frontend kết nối
  app.enableCors({
    origin: 'http://localhost:3000', // URL của frontend
    credentials: true, // Cho phép gửi cookies
  });

  app.use(cookieParser());

  app.use(helmet({
    noSniff: true,
  }));


  await app.listen(4000);
}
bootstrap();
