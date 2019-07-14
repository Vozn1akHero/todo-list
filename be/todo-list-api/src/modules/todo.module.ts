import { Module } from '@nestjs/common';
import { TodoService } from "../services/todo.service";
import { TodoController } from "../controllers/todo.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from "../models/todo/todo.schema";
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from '../models/user/user.schema';
import { UserService } from '../services/user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}
