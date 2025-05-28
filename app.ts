interface Shape<T> {
	radius: T
}

function createShape<T = number>(val: T): Shape<T> {
	return { radius: val }
}

const firstShape = createShape<number>(10)
const secondShape = createShape<string>('10')

// interface IUser {
// 	name: string
// }

// function getFirstElement<T>(arr: T[]): T {
// 	return arr[0]
// }

// const firstName = getFirstElement<number>([1, 2, 3])
// const firstString = getFirstElement<string>(['a', 'b', 'c'])
// const firstUser = getFirstElement<IUser>([{ name: 'John' }, { name: 'Doe' }])

// interface User {
// 	name: string
// }
// interface Age {
// 	age: number
// }
// interface Married {
// 	isMarried: boolean
// }

// function merge<T, U, K>(obj1: T, obj2: U, obj3: K): T & U & K {
// 	return { ...obj1, ...obj2, ...obj3 }
// }

// const user = merge<User, Age, Married>(
// 	{ name: 'John' },
// 	{ age: 30 },
// 	{ isMarried: true }
// )

// console.log(user)

// function identity<T, U>(x: T, y: U): [T, U] {
// 	return [x, y]
// }

// const result = identity<string, number>('Helleo', 13)
// const result1 = identity<string, number>('hello', 1)
// const result2 = identity<boolean, string>(true, 'hello') // Inferred as [number, string]
