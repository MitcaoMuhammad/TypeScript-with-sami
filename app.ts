// Null - Qiymat yo'q qulda uzimiz berishimiz kerak
// undefined - o'zgaruvchiga qiymat berilmaganligini

let userName: string | null = null
let showUsername = userName ?? 'Guest'
console.log(showUsername) // "Guest"

// function logger(msg: string | null): void {
// 	if (msg === null) {
// 		console.log('No message provided')
// 	} else {
// 		console.log(msg)
// 	}
// }

// logger('Hello, World!') // "Hello, World!"
// logger(null) // "No message provided"
