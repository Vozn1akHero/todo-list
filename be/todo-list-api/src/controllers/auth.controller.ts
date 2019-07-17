import { Body, Controller, Get, Post, Req, Res, Session } from '@nestjs/common';
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
  async logIn(@Body() user: UserAuthDto, @Res() res, @Req() req, @Session() session){
    const loginRes = await this.authService.logIn(user).then(res => res);

    if(loginRes.tokenExists){
      req.session.token = loginRes.accessToken;
      return res.sendStatus(200);
    }
    else return res.sendStatus(403);
  }

  @Get('isAuthenticated')
  async isAuthenticated(@Res() res, @Req() req){
    const JWTValidity = await this.authService.verifyJWT(req.session.token);
    return JWTValidity ? res.sendStatus(200) : res.sendStatus(403);
  }
}
