import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { UserDto } from '../models/user/user.dto';
import bcrypt from 'bcrypt';
import { AuthService } from '../services/auth.service';
import { UserAuthDto } from '../models/user/user.auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('joinup')
  async joinUp(@Body() user: UserAuthDto, @Res() res) {
    const regRes = await this.authService.joinUp(user).then( res => res);

    if(regRes.msg === 'LOGIN IS ALREADY TAKEN') return res.status(403).json({
      msg:regRes.msg
    });
    else return res.status(200).json({
      msg:regRes.msg
    });
  }

  @Post('login')
  async logIn(@Body() user: UserAuthDto){
    return await this.authService.logIn(user).then(res => res);
  }
}
