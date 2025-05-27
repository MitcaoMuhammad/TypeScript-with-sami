interface IAnimal {
	makeSound(): void
	move(): void
}

interface IBird {
	fly(): void
}

abstract class Animal {
	constructor(public name: string) {}

	abstract makeSound(): void

	move(): void {
		console.log(`${this.name} is moving`)
	}
}

class Cat extends Animal {
	makeSound(): void {
		console.log(`${this.name} says Meow`)
	}
}

const cat = new Cat('Tom')
cat.makeSound() // Tom says Meow
cat.move() // Tom is moving

// class Parent {
// 	static message: string = 'Hello from Parent class'
// }

// class Child extends Parent {}

// console.log(Child.message) // Accessing static property from Child class

// class Counter {
// 	static count = 0
// 	private static secretKey: string = '123456'
// 	title: string

// 	constructor(title: string) {
// 		this.title = title
// 	}

// 	static increment() {
// 		this.count++
// 	}

// 	static add(a: number, b: number) {
// 		return a + b
// 	}

// 	static getSecretKey() {
// 		return this.secretKey
// 	}

// 	gerTitle() {
// 		return this.title
// 	}
// }

// const c = new Counter('Counter 1')
// console.log(c.title)

// console.log(Counter.count)
// Counter.increment()
// console.log(Counter.count)

// console.log(Counter.add(5, 10))
// console.log(Counter.count)
// console.log(Counter.getSecretKey())
