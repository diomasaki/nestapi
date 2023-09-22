import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './schema/user.schema'


@Injectable()
export class UserServices {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
}