export interface IAuthLogin {
    readonly username: string;
    readonly password: string;
}

export interface IAuthRegist extends IAuthLogin{
    readonly email: string;
    readonly phone: number;
    readonly mac_address: string;
}