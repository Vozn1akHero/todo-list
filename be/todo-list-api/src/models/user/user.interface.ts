import { Document } from 'mongoose';
import { Todo } from '../todo/todo.interface';

export interface User extends Document {
  readonly login: string;
  readonly password: string;
  temporaryToken: string;
  todos: Todo[];
}
