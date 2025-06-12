"use strict";
class AuthOption {
    constructor(authType, token, expiresIn, refreshToken) {
        this.authType = authType;
        this.token = token;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
    }
}
