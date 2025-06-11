interface IShape {
	name: string
	getValue(): string
}

function ChangeShape<TBase extends { new (...args: any[]): {} }>(
	constructor: TBase
) {
	return class extends constructor {
		name: string = 'Circle'
		color: string = 'red'
		getInfo() {
			return this.name + ' ' + this.color
		}
	}
}

function WithVersion(version: '1.0.0' | '2.0.0') {
	return function <TBase extends { new (...args: any[]): {} }>(
		constructor: TBase
	) {
		return class extends constructor {
			version: string = version
		}
	}
}

@ChangeShape
@WithVersion('1.0.0')
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
