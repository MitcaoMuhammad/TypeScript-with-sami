"use strict";
function calc({ a, b = 2 }) {
    return a + b;
}
const result = calc({ a: 5, b: 3 });
console.log(result); // Output: 8
// function logger(text: string, callback: (message: string) => void) {
// 	console.log(text)
// 	callback(`Logged: ${text}`)
// }
// logger('Hello, World!', message => {
// 	console.log(message)
// })
// let unusable: void
// unusable = undefined // valid
// function logger(): void {
// 	return
// }
// logger()
