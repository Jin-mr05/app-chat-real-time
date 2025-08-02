import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import configuration from './common/config/configuration';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { AuthCookieGuard } from './common/guard/auth.cookie.guard';
import { TicketModule } from './modules/ticket/ticket.module';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    PrismaModule, AuthModule, EmailModule, TicketModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      inject: [Reflector],
      useFactory: (reflector: Reflector) => new AuthCookieGuard(reflector),
    }
  ],
})
export class AppModule { }
