import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import configuration from './common/config/configuration';
import { APP_GUARD, APP_INTERCEPTOR, Reflector } from '@nestjs/core';
import { AuthCookieGuard } from './common/guard/auth.cookie.guard';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';
import { UserModule } from './modules/user/user.module';
import { CustomCacheModule } from './modules/custom-cache/custom-cache.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { RoomModule } from './modules/room/room.module';
import { StartupService } from './common/startup/startup.service';
import { PrivateChatModule } from './modules/private-chat/private-chat.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Module({
  imports: [
    CronModule, RoomModule, UserModule, CustomCacheModule, PrismaModule, AuthModule, EmailModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      ttl: TIME_LIFE_CACHE,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
     EventEmitterModule.forRoot(),
    PrivateChatModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    StartupService,
    {
      provide: APP_GUARD,
      inject: [Reflector],
      useFactory: (reflector: Reflector) => new AuthCookieGuard(reflector),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class AppModule { }
