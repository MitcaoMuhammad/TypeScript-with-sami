interface Drivable {
	startEngine(): void
	drive(speed: number): void
	model: string
}

interface Flyable {
	fly(speed: number): void
}

class Car implements Drivable, Flyable {
	model: string

	constructor(model: string) {
		this.model = model
	}

	startEngine(): void {
		console.log(`${this.model} engine started.`)
	}

	drive(speed: number): void {
		console.log(`${this.model}: driving at ${speed} km/hr.`)
	}

	fly(speed: number): void {
		console.log(`${this.model}: flying at ${speed} km/hr.`)
	}
}

const Toyota = new Car('Toyota')
Toyota.startEngine()
Toyota.drive(100)
Toyota.fly(200)

const Honda = new Car('Honda')
Honda.startEngine()
Honda.drive(120)
Honda.fly(250)
