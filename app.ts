type GetPropType<T, K extends keyof T> = T[K]

type User = { name: string; age: number }
type NameType = GetPropType<User, 'name'> // string

// Indexed access type = tipdan proprtiy turuni olish - User['name] -> string
// Conditional type = tipdan turli shartlarga qarab turli natija qaytarish - T extends U ? X : Y

// interface IAdmin {
// 	role: 'admin'
// 	access: true
// }

// interface IGuest {
// 	role: 'guest'
// 	access: false
// }

// type RoleAccess<T> = T extends { role: 'admin' } ? true : false

// type AdminAccess = RoleAccess<IAdmin> // true
// type GuestAccess = RoleAccess<IGuest> // false

// // const user = {
// // 	id: 1,
// // 	name: 'John Doe',
// // 	age: 30,
// // 	isMarried: false,
// // }

// // function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// // 	return obj[key]
// // }

// // const userName = getProperty(user, 'name') // Type is string
// // const userAge = getProperty(user, 'age') // Type is number
