"use strict";
const user = {
    id: 1,
    name: 'John',
};
const product = {
    id: 2,
    title: 'Laptop',
};
const course = {
    _id: 3,
    title: 'TypeScript',
};
function getById(obj) {
    if (obj.id) {
        return obj.id;
    }
    else if (obj._id) {
        return obj._id;
    }
    else {
        throw new Error('Object does not have an id or _id property');
    }
}
const userId = getById(user);
const productId = getById(product);
const courseId = getById(course);
console.log(userId); // Output: 1
console.log(productId); // Output: 2
console.log(courseId); // Output: 3
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// 	return obj[key]
// }
// const user = {
// 	id: 1,
// 	name: 'John',
// 	age: 30,
// 	email: ' johndoe@gmail.com',
// }
// const userName = getProperty(user, 'name')
// const userEmail = getProperty(user, 'email')
// console.log(userEmail) // Output:
// console.log(userName) // Output: John
// function getLingth<T extends { length: number }>(item: T): number {
// 	return item.length
// }
// console.log(getLingth('hello Worled'))
// console.log(getLingth([1, 2, 3, 4, 5]))
