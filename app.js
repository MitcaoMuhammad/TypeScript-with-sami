"use strict";
// Null - Qiymat yo'q qulda uzimiz berishimiz kerak
// undefined - o'zgaruvchiga qiymat berilmaganligini
let userName = null;
let showUsername = userName !== null && userName !== void 0 ? userName : 'Guest';
console.log(showUsername); // "Guest"
// function logger(msg: string | null): void {
// 	if (msg === null) {
// 		console.log('No message provided')
// 	} else {
// 		console.log(msg)
// 	}
// }
// logger('Hello, World!') // "Hello, World!"
// logger(null) // "No message provided"
