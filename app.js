"use strict";
function getInfo() {
    return ['John Doe', 30];
}
const logger = getInfo();
const [username, age] = logger;
console.log(username, age);
// // Tuple union type
// let coordinates: [number, string | number] = [10, 20]
// console.log('1', coordinates)
// coordinates = [30, 'east']
// console.log('2', coordinates)
// coordinates = [40, 50]
// console.log('3', coordinates)
// const person: [string, number] = ['John Doe', 30]
// person.push('Muhammad')
// console.log(person)
// console.log(person[0])
// console.log(person[1])
