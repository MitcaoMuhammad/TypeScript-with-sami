"use strict";
let person = {
    name: 'John',
    age: 30,
};
if (typeof person === 'object') {
    const obj = person;
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}
// let value: unknown = 20.514224827645
// let string: number = value as number
// console.log(string.toFixed(2))
// function logger(value: unknown): void {
// 	if (typeof value === 'string') {
// 		console.log(`String: ${value}`)
// 	} else if (typeof value === 'number') {
// 		console.log(`Number: ${value}`)
// 	} else if (Array.isArray(value)) {
// 		console.log(`Array: ${value.join(', ')}`)
// 	} else if (typeof value === 'object' && value !== null) {
// 		console.log(`Object: ${JSON.stringify(value)}`)
// 	} else {
// 		console.log('Unknown type')
// 	}
// }
// logger('Hello, world!')
// logger(42)
// logger([1, 2, 3])
// logger({ key: 'value' })
// logger(null)
// logger(undefined)
// logger(true)
