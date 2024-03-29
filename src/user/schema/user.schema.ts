import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {HydratedDocument} from 'mongoose'

export type UserDoc = HydratedDocument<User>

@Schema({timestamps: true})
export class User{
    @Prop({required: true})
    username: string;
    
    @Prop({required: true})
    password: string;
    
    @Prop({required: true, unique: true})
    email: string;
    
    @Prop({required: true, unique: true})
    phone: number;

    @Prop({required: true, unique: true})
    mac_address: string;
    
}

export const UserSchema = SchemaFactory.createForClass(User)