import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UserDto} from "../models/user/user.dto";
import {User} from "../models/user/user.interface";
import { UserAuthDto } from '../models/user/user.auth.dto';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    async create(user: UserAuthDto) : Promise<void>{
        const createdUser = new this.userModel(user);

        await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
}
