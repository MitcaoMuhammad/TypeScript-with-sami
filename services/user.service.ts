class UserService {
	private users: { id: number; name: string }[] = []

	constructor() {
		this.users = [
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
		]
	}

	getUsers() {
		return this.users
	}

	addUser(name: string) {
		const newUser = { id: this.users.length + 1, name }
		this.users.push(newUser)
		return newUser
	}
}
