function Logger(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	descriptor.value = function (...args: any[]) {
		console.log('Method not implemented. ')
		return args
	}

	return descriptor
}

function Auth(role: 'admin' | 'user') {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		if (role === 'admin') {
			throw new Error('Only Admins can access this method.')
		}

		const originalMethod = descriptor.value

		descriptor.value = function (this: { isAdmin: boolean }, ...args: any[]) {
			if (!this.isAdmin) {
				console.log('Access denied: You are not an admin.')
				return
			}

			return originalMethod.apply(this, args)
		}

		return descriptor
	}
}

class User {
	constructor(
		public name: string,
		public age: number,
		public isAdmin: boolean
	) {}

	@Logger
	greeting() {
		throw new Error('Method not implemented.')
	}

	@Auth('admin')
	deleteUser() {
		console.log('Deleting user')
	}
}

const user = new User('John', 30, false)
user.greeting() // Logs: Method not implemented.
user.deleteUser() // Logs: Access denied: You are not an admin.
