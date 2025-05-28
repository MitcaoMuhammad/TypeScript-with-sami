enum Rouls {
	ADMIN,
	USER,
}

type UserRoules = Record<string, string>

const roules: UserRoules = {
	[Rouls.ADMIN]: 'admin',
	[Rouls.USER]: 'user',
}

interface IUser {
	name: string

	age: number
}

const users: Array<IUser> = [
	{
		name: 'John',
		age: 30,
	},
	{
		name: 'Jane',
		age: 25,
	},
]

const numbers: Array<number> = [1, 2, 3, 4, 5]
const names: [string, number] = ['John', 30]
