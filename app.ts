interface IShape {
	name: string
	getValue(): string
}

function ChangeShape(constructor: Function) {
	constructor.prototype.name = 'Circle'
	constructor.prototype.color = 'Red'
}

@ChangeShape
class Circle implements IShape {
	name: string = 'Circle'

	constructor() {
		console.log('Circle created')
	}

	getValue(): string {
		return this.name
	}
}

const shape = new Circle()
console.log(shape)
// @ts-ignore
console.log(shape.Color)
