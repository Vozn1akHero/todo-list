require('dotenv').config();

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../models/user/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../helpers/jwt.strategy';


@Module({
  imports: [ MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({ secret: process.env.JWT_KEY, signOptions: { expiresIn: '60s' } }),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
