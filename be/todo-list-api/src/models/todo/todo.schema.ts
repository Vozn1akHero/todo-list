import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    date: Date,
    done: Boolean
});
