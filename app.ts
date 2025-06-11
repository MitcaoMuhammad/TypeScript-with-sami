function CreateAt<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		readonly createdAt: Date = new Date()
	}
}

function LogMethod(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value

	descriptor.value = function (...args: any[]) {
		console.log(`Calling ${propertyKey} with arguments:`, new Date(), args)
		return originalMethod.apply(this, args)
	}

	return descriptor
}

@CreateAt
class User {
	constructor(public name: string, public age: number) {}

	@LogMethod
	getUserInfo() {
		console.log(`User Info: ${this.name}, Age: ${this.age}`)
	}
}

@CreateAt
class Product {
	constructor(public title: string, public price: number) {}

	@LogMethod
	getProductInfo() {
		console.log(`Product Info: ${this.title}, Price: ${this.price}`)
	}
}

type CreateEntity = { createdAt: Date }

const user = new User('Alice', 30) as User & CreateEntity
const product = new Product('Laptop', 1200) as Product & CreateEntity

console.log(`User created at: ${user.createdAt}`)
user.getUserInfo()

console.log(`Product created at: ${product.createdAt}`)
product.getProductInfo()
