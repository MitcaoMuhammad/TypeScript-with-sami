"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function CreateAt(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with arguments:`, new Date(), args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUserInfo() {
        console.log(`User Info: ${this.name}, Age: ${this.age}`);
    }
};
__decorate([
    LogMethod
], User.prototype, "getUserInfo", null);
User = __decorate([
    CreateAt
], User);
let Product = class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getProductInfo() {
        console.log(`Product Info: ${this.title}, Price: ${this.price}`);
    }
};
__decorate([
    LogMethod
], Product.prototype, "getProductInfo", null);
Product = __decorate([
    CreateAt
], Product);
const user = new User('Alice', 30);
const product = new Product('Laptop', 1200);
console.log(`User created at: ${user.createdAt}`);
user.getUserInfo();
console.log(`Product created at: ${product.createdAt}`);
product.getProductInfo();
