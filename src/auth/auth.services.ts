import {Injectable, Res} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { IAuthLogin, IAuthRegist } from './interface/auth.interface';
import * as bcrypt from 'bcrypt'
import {Response} from 'express'
import { ERROR, SUCCESS } from 'src/constant/constant';
import getMac, {isMAC} from 'getmac'

@Injectable()

export class AuthServices {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


    async register(userInterface: IAuthRegist): Promise<User> {
        const salt = 10
        const hash = await bcrypt.hash(userInterface.password, salt)
        const mac = getMac().toUpperCase()
        const {password, mac_address, ...others} = userInterface
        const createUser = await this.userModel.create({password: hash, mac_address: mac,  ...others})
        return createUser
    }
    
    async login(auth: IAuthLogin,@Res() res: Response): Promise<IAuthLogin> {
        const find = await this.userModel.findOne({username: auth.username})
        console.log(find)
        if (!find) return ERROR(res, 401, "Failed", "Wrong_username", "Not Authorized!")

        const checkPass = await bcrypt.compareSync(auth.password, find.password)
        console.log(checkPass)
        if (checkPass == false) return ERROR(res, 401, "Failed", "Wrong_password", 'Not Authorized!')

        return SUCCESS(res, 200, "Success", "Login_success!", find)
    }
    
}