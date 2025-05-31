const config = {
	apiUrl: 'https://api.example.com',
	port: 3000,
	debug: true,
}

type ConfigKeys = keyof typeof config

function getConfigValue(key: ConfigKeys) {
	return config[key]
}

console.log(getConfigValue('apiUrl')) // 'https://api.example.com'
console.log(getConfigValue('port')) // 3000

// typeof - qiymatning turini olish uchun ishlatiladi
// keyof - obyektning kalitlarini olish uchun ishlatiladi
// keyof typeof - obyektning kalitlarini olish uchun ishlatiladi, lekin obyektning turini ham aniqlaydi

// const user = {
// 	name: 'John Doe',
// 	age: 30,
// 	isMarried: false,
// }

// type User = typeof user

// function logUser(user: User) {
// 	console.log(user)
// }

// logUser(user)

// type IUser = {
// 	name: string
// 	age: number
// 	isMarried: boolean
// }

// type UserKeys = keyof IUser

// function getUserKey(key: UserKeys) {
// 	console.log(key)
// }

// getUserKey('age')

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// 	return obj[key]
// }

// const car = {
// 	modal: 'Toyota',
// 	year: 2020,
// 	color: 'red',
// }

// const userName = getProperty(car, 'year')
