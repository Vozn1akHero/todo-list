import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {TodoModule} from "./modules/todo.module";
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [TodoModule,
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest')]
})
export class AppModule {}
