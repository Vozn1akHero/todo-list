import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {TodoModule} from "./modules/todo.module";
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';

import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
import { CookieParserMiddleware } from '@nest-middlewares/cookie-parser';
import { CookieSessionMiddleware } from '@nest-middlewares/cookie-session';

import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [TodoModule,
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest')]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer ) {
    CookieSessionMiddleware.configure({
      name: 'auth',
      keys: ['hello-world'],
      secure: false,
      maxAge: 60 * 60 * 1000
    });
    consumer.apply(CookieSessionMiddleware).forRoutes(AuthController);
  }
}
