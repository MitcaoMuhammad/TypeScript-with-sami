"use strict";
// |-----------------------------------------------| cache Decorators |--------------------------------------------------------|
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function CacheResult(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    descriptor.value = function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`Cache hit for ${String(propertyKey)} with args ${key}`);
            return cache.get(key);
        }
        console.log(`Cache miss for ${String(propertyKey)} with args ${key}`);
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
    return descriptor;
}
class MathService {
    factorial(n) {
        if (n <= 1)
            return 1;
        return n * this.factorial(n - 1);
    }
}
__decorate([
    CacheResult
], MathService.prototype, "factorial", null);
const mathService = new MathService();
console.log(mathService.factorial(5)); // Cache miss, computes result
console.log(mathService.factorial(5)); // Cache hit, returns cached result
// |-----------------------------------------------| Parameter Decorators |----------------------------------------------------|
// function LogParameter(
// 	target: any,
// 	propertyKey: string,
// 	parameterIndex: number
// ) {
// 	console.log(
// 		`Parameter decorator called for ${propertyKey} at index ${parameterIndex}`
// 	)
// }
// class LogService {
// 	createLog(name: string, @LogParameter id: string) {
// 		console.log(`Log created: ${name} with ID: ${id}`)
// 	}
// }
// const logService = new LogService()
// logService.createLog('UserLogin', '123100')
// |-----------------------------------------------| Accessor Decorators |-----------------------------------------------------|
// function Readonly(
// 	target: any,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	descriptor.set = function () {
// 		throw new Error(`Cannot set value for read-only property: ${propertyKey}`)
// 	}
// }
// class Product {
// 	private _id: number
// 	@Readonly
// 	get id() {
// 		return this._id
// 	}
// }
// const product = new Product()
// console.log(product.id)
// // @ts-ignore
// product.id = 123
// |-----------------------------------------------| Property Decorators |-----------------------------------------------------|
// function Uppercase(target: any, propertyKey: string) {
// 	let value: string
// 	const getter = () => value
// 	const setter = (newValue: string) => {
// 		value = newValue.toUpperCase()
// 	}
// 	Object.defineProperty(target, propertyKey, {
// 		get: getter,
// 		set: setter,
// 		enumerable: true,
// 		configurable: true,
// 	})
// }
// function Lowercase(target: any, propertyKey: string) {
// 	let value: string
// 	const getter = () => value
// 	const setter = (newValue: string) => {
// 		value = newValue.toLowerCase()
// 	}
// 	Object.defineProperty(target, propertyKey, {
// 		get: getter,
// 		set: setter,
// 		enumerable: true,
// 		configurable: true,
// 	})
// }
// class User {
// 	@Uppercase
// 	public firstName: string
// 	@Lowercase
// 	public lastName: string
// 	constructor(firstName: string, lastName: string) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}
// }
// const user = new User('John', 'Doe')
// console.log(user.firstName)
// console.log(user.lastName)
