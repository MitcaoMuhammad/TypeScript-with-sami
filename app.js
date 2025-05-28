"use strict";
var Rouls;
(function (Rouls) {
    Rouls[Rouls["ADMIN"] = 0] = "ADMIN";
    Rouls[Rouls["USER"] = 1] = "USER";
})(Rouls || (Rouls = {}));
const roules = {
    [Rouls.ADMIN]: 'admin',
    [Rouls.USER]: 'user',
};
const users = [
    {
        name: 'John',
        age: 30,
    },
    {
        name: 'Jane',
        age: 25,
    },
];
const numbers = [1, 2, 3, 4, 5];
const names = ['John', 30];
