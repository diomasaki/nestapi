export class AuthDtoLogin{
    readonly username: string;
    readonly password: string;
}

export class AuthDto extends AuthDtoLogin {
    readonly email: string;
    readonly phone: number;
    readonly mac_address: string;
}

