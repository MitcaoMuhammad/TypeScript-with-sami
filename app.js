"use strict";
class Shope {
    constructor(color) {
        this.color = color;
    }
    describe() {
        console.log(`This shop is ${this.color}.`);
    }
}
class Cricle extends Shope {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    describe() {
        super.describe();
        console.log(`It has a radius of ${this.radius} meters.`);
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Cricle('red', 5);
myCircle.describe();
console.log(myCircle.area());
// class Animal {
// 	id: number
// 	name: string
// 	constructor(id: number, name: string) {
// 		this.id = id
// 		this.name = name
// 	}
// 	speak() {
// 		this.id = 10 * this.id
// 		console.log(`${this.name} makes a sound.`)
// 	}
// 	showInfo() {
// 		console.log(`Animal ID: ${this.id}, Name: ${this.name}`)
// 	}
// }
// class Cat extends Animal {
// 	constructor(name: string) {
// 		const id = Math.random() * 1000
// 		super(id, name)
// 	}
// 	override speak() {
// 		super.speak()
// 		console.log(`${this.name} Meow!`)
// 	}
// }
// const cat = new Cat('Whiskers')
// const id = cat.id
// cat.speak()
// cat.showInfo()
