// Pick = Asosiy typdan kerakli xususiyatlarni tanlash
// Omit = Asosiy typdan kerakli xususiyatlarni chiqarib tashlash
// Extract = Ikkita tipdan umumiy xususiyatlarni olish
// Exclude = Ikkita tipdan umumiy xususiyatlarni chiqarib tashlash
interface IAnimal {
	name: string
	species: string
	age: number
}

interface IPlant {
	name: string
	color: string
	age: number
}

// type CommonProperties = Extract<keyof IAnimal, keyof IPlant>
type CommonProperties = Exclude<keyof IAnimal, keyof IPlant>

// interface IUser {
// 	name: string
// 	age: number
// 	email: string
// 	address: string
// 	avatar: string
// 	phone: string
// 	password: string
// 	secretKey: string
// }

// // type UserContactInfo = Pick<IUser, 'email' | 'phone'>;
// type UserContactInfo = Omit<IUser, 'password' | 'secretKey'>

// const user: UserContactInfo = {
// 	address: '123 Main St',
// 	avatar: 'https://example.com/avatar.jpg',
// 	email: '',
// 	phone: '',
// 	age: 30,
// 	name: 'John Doe',
// }
