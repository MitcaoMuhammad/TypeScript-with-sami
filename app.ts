class Car {
	name: string
	year: Date

	constructor(name: string, year: Date) {
		this.name = name
		this.year = year
	}
}

const toyota = new Car('Toyota', new Date(2020, 0, 1))
console.log(toyota)
toyota.name = 'Toyota Corolla'
console.log(toyota)

const chevrolet = new Car('Chevrolet', new Date(2021, 0, 1))
console.log(chevrolet)
