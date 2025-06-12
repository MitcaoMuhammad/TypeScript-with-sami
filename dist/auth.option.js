"use strict";
class AuthOption {
    constructor(authType, token, expiresIn, refreshToken) {
        Object.defineProperty(this, "authType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: authType
        });
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: token
        });
        Object.defineProperty(this, "expiresIn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: expiresIn
        });
        Object.defineProperty(this, "refreshToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: refreshToken
        });
    }
}
//# sourceMappingURL=auth.option.js.map