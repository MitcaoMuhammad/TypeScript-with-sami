interface Person {
	[key: string]: string | number
}

const person: Person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	country: 'USA',
}

// type Logger = (message: string) => void

// interface Person {
// 	readonly firstName: string
// 	readonly lastName: string
// 	role: string
// 	logger: Logger
// }

// let persons: Person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	role: 'Developer',
// 	logger: (message: string) => {
// 		console.log(`Log: ${message}`)
// 	},
// }

// persons.role = 'user'

// console.log(persons)

// interface Employee {
// 	company: string
// 	position: string
// }

// interface WorkerPerson extends Person, Employee {
// 	age: number
// }

// let persons: WorkerPerson[] = [
// 	{
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		age: 30,
// 		company: 'Tech Corp',
// 		position: 'Developer',
// 	},
// 	{
// 		firstName: 'Jane',
// 		lastName: 'Smith',
// 		age: 25,
// 		company: 'Health Inc',
// 		position: 'Nurse',
// 	},
// ]

// console.log(persons)
