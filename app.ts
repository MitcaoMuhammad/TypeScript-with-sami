class Shape<T, U> {
	private content: T
	radius: U

	constructor(content: T, radius: U) {
		this.content = content
		this.radius = radius
	}

	getContent(): T {
		return this.content
	}

	getRadius(): U {
		return this.radius
	}
}

const shape = new Shape<string, number>('Circle', 5)
console.log(shape.getContent()) // Output: Circle

const shape2 = new Shape<number, string>(10, 'Large')
console.log(shape2.getRadius()) // Output: Large
