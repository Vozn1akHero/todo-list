import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo/todo.interface';
import { TodoDto } from '../models/todo/todo.dto';

import { UserService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: TodoDto, @Res() res, @Req() req) {
    const userToken: String = req.headers.authorization;
    this.todoService.create(userToken, createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get('findAllByDate')
  async findAllByDate(@Query('date') date) : Promise<Todo[]>{
    return this.todoService.findAllByDate(date);
  }

  @Delete(':id')
  async removeToDo(@Param() params) {
    await this.todoService.removeToDo(params.id);
  }

  @Put('changeTodoStatus/:id')
  changeToDoStatus(@Param() params) {
    this.todoService.changeToDoStatus(params.id);
  }

  @Get('lastCreated')
  getLastCreatedTodo() {
    return this.todoService.getLastCreatedTodo();
  }
}
