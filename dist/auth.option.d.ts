declare class AuthOption {
    readonly authType: string;
    readonly token: string;
    readonly expiresIn?: number | undefined;
    readonly refreshToken?: string | undefined;
    constructor(authType: string, token: string, expiresIn?: number | undefined, refreshToken?: string | undefined);
}
