import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {TodoDto} from "../models/todo/todo.dto";
import {Todo} from "../models/todo/todo.interface";
import { UserService } from './user.service';
import { User } from '../models/user/user.interface';


@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>,
                @InjectModel('User') private readonly userModel: Model<User>) {
    }

    create(userToken: String, createTodoDto: TodoDto) {
        const createdTodo = new this.todoModel(createTodoDto);

        createdTodo.save().then((err, newTodo) => {
                this.userModel.update({
                    temporaryToken: userToken
                }, {
                    $push: {
                        todos: newTodo
                    }
                });
        });
    }

    getLastCreatedTodo() {
        return this.todoModel.find().sort({ _id: 1 }).limit(1);
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async findAllByDate(chosenDate, userToken) : Promise<Todo[]> {
        return await this.userModel.findOne({ temporaryToken: userToken })
          .populate('todos')
          .findMany( {date: chosenDate} )
          .exec();
    }

    async removeToDo(id) {
        await this.todoModel.find({_id: id}).deleteOne().exec();
    }

    async changeToDoStatus(id){
        const curStatus = await this.todoModel.findOne({ _id: id}).select();
        await this.todoModel.find({ _id: id}).updateOne({ done: !curStatus.done });
    }
}
