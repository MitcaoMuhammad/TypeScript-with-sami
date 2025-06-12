"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ];
    }
    getUsers() {
        return this.users;
    }
    addUser(name) {
        const newUser = { id: this.users.length + 1, name };
        this.users.push(newUser);
        return newUser;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map