"use strict";
// public = tashqi kodlardan foydalanish mumkin
// private = faqatgina class nining o'zida foydalanish mumkin
// protected = faqatgina class nining o'zida va undan meros olgan classlarda foydalanish mumkin
class Person {
    constructor(age) {
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, salary) {
        super(age);
        this.name = name;
        this.salary = salary;
    }
    getBonus() {
        return this.salary * 0.2;
    }
    showAge() {
        return this.age;
    }
}
const employee = new Employee('John', 30, 50000);
console.log(`Employee Name: ${employee.name}`); // Employee Name: John
console.log(`Employee Age: ${employee.showAge()}`); // Employee Age: 30
console.log(`Employee Bonus: ${employee.getBonus()}`); // Employee Bonus: 10000
// class User {
// 	name: string
// 	constructor(name: string) {
// 		this.name = name
// 	}
// 	sayHello() {
// 		console.log`Hello, my name is ${this.name}`
// 	}
// }
// class Payment {
// 	amount: number
// 	constructor(amount: number) {
// 		this.amount = amount
// 	}
// 	pay() {
// 		console.log(`Payment of ${this.amount} made.`)
// 	}
// }
// class UserWithPayment {
// 	user: User
// 	payment: Payment
// 	constructor(user: User, payment: Payment) {
// 		this.user = user
// 		this.payment = payment
// 	}
// 	showInfo() {
// 		this.user.sayHello()
// 		this.payment.pay()
// 	}
// }
// const userWithPayment = new UserWithPayment(new User('Alice'), new Payment(100))
// userWithPayment.showInfo()
