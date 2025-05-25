type Person = {
	firstName: string
	lastName: string
	wife?: Person
}

type PersonList = Person[]

let persons: PersonList = [
	{ firstName: 'John', lastName: 'Doe' },
	{ firstName: 'Jane', lastName: 'Smith' },
]

console.log(persons)

// type Employee = {
// 	company: string
// 	position: string
// }

// type CompanyWorker = Person & Employee

// let worker1: CompanyWorker = {
// 	firstName: 'Alice',
// 	lastName: 'Johnson',
// 	company: 'TechCorp',
// 	position: 'Software Engineer',
// }

// let employee1: Employee = {
// 	company: 'TechCorp',
// 	position: 'Software Engineer',
// }

// let person1: Person = {
// 	firstName: 'Alice',
// 	lastName: 'Johnson',
// }

// type Logger = (message: string) => string

// const log: Logger = message => {
// 	return message.toUpperCase()
// }

// console.log(log('Hello, TypeScript!'))

// import { Person } from './app.types'

// const person1: Person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 30,
// 	skills: ['JavaScript', 'TypeScript', 'React'],
// }

// const person2: Person = {
// 	firstName: 'Jane',
// 	lastName: 'Smith',
// 	age: 25,
// 	skills: ['Python', 'Django', 'Flask'],
// }

// console.log(person1)
// console.log(person2)

// type ID = string | number

// let userId: ID

// userId = 123
// userId = '123'

// let productId: ID

// productId = 456
// productId = '456'
