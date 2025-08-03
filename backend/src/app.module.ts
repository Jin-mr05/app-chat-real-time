import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import configuration from './common/config/configuration';
import { APP_GUARD, APP_INTERCEPTOR, Reflector } from '@nestjs/core';
import { AuthCookieGuard } from './common/guard/auth.cookie.guard';
import { TicketModule } from './modules/ticket/ticket.module';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';
import { GroupModule } from './modules/group/group.module';
import { ChatModule } from './modules/chat/chat.module';
import { UserModule } from './modules/user/user.module';
import { CustomCacheModule } from './modules/custom-cache/custom-cache.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Module({
  imports: [
    CronModule, GroupModule, ChatModule, UserModule, CustomCacheModule, PrismaModule, AuthModule, EmailModule, TicketModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      ttl: TIME_LIFE_CACHE,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      inject: [Reflector],
      useFactory: (reflector: Reflector) => new AuthCookieGuard(reflector),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule { }
