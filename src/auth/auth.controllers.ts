import {Body, Controller, Post, Res} from '@nestjs/common'
import { AuthServices } from './auth.services';
import { AuthDto, AuthDtoLogin } from './dto/auth.dto';
import { Response } from 'express';


@Controller('auth')

export class AuthController {
    constructor(private authService: AuthServices){}


    @Post('c')
    async register(@Body() authDto: AuthDto): Promise<AuthDto> {
        const create = await this.authService.register(authDto)
        return create
    }

    @Post('')
    async signIn(@Body() authLogin: AuthDtoLogin, @Res() res: Response): Promise<AuthDtoLogin> {
        const sign = await this.authService.login(authLogin,res)
        return sign
    }
}