import * as mongoose from 'mongoose';
import { TodoSchema } from '../todo/todo.schema';

export const UserSchema = new mongoose.Schema({
    login : String,
    password : String,
    temporaryToken: String,
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TodoSchema' }]
});
