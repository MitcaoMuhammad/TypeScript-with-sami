function throwError(message: string): never {
	throw new Error(message)
}

function isNumber(value: unknown): asserts value is number {
	if (typeof value !== 'number') {
		throwError('Value is not a number')
	}
}

const age: unknown = '25'
isNumber(age) // This will throw an error if age is not a number
console.log(`Age is: ${age}`) // This line will not execute if age is not a number

// type Car = { speed: number }
// type Plane = { altitude: number }

// function getInfo(vehicle: Car | Plane) {
// 	if ('speed' in vehicle) {
// 		console.log(`Car speed: ${vehicle.speed} km/h`)
// 	} else if ('altitude' in vehicle) {
// 		console.log(`Plane altitude: ${vehicle.altitude} m`)
// 	}
// }

// getInfo({ speed: 120 }) // Outputs: Car speed: 120 km/h
// getInfo({ altitude: 3000 }) // Outputs: Plane altitude: 3000 m

// class Dog {
// 	bark() {
// 		console.log('Woof!')
// 	}
// }

// class Cat {
// 	meow() {
// 		console.log('Meow!')
// 	}
// }

// function makeSound(animal: Dog | Cat) {
// 	if (animal instanceof Dog) {
// 		animal.bark()
// 	} else if (animal instanceof Cat) {
// 		animal.meow()
// 	}
// }

// makeSound(new Dog()) // Outputs: Woof!
// makeSound(new Cat()) // Outputs: Meow!

// let message: unknown = 123

// let strLength1: string = <string>message
// console.log(strLength1.length)
// let strLength2: string = message as string
// console.log(strLength1.length)
