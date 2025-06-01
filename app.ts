// type Constructor<T = {}> = new (...args: any[]) => T

// function CanLog<TBase extends Constructor>(Base: TBase) {
// 	return class extends Base {
// 		log(message: string) {
// 			console.log(`[LOG]: ${message}`)
// 		}
// 	}
// }

// function CanAccess<TBase extends Constructor>(Base: TBase) {
// 	return class extends Base {
// 		role: string = 'guest'

// 		setRole(role: string) {
// 			this.role = role
// 		}

// 		canAccess(requiredRole: string): boolean {
// 			return this.role === requiredRole
// 		}
// 	}
// }

// function CanValidate<TBase extends Constructor>(Base: TBase) {
// 	return class extends Base {
// 		isValidEmail(email: string): boolean {
// 			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// 			return emailRegex.test(email)
// 		}

// 		isNotEmpty(value: string): boolean {
// 			return value.trim().length > 0
// 		}
// 	}
// }

// class BaseService {}

// const MixedService = CanLog(CanAccess(CanValidate(BaseService)))

// class UserService extends MixedService {
// 	createUser(email: string, role: string) {
// 		if (!this.isValidEmail(email)) {
// 			this.log('Invalid email format')
// 			return
// 		}

// 		if (!this.isNotEmpty(email)) {
// 			this.log('Email cannot be empty')
// 			return
// 		}

// 		if (!this.isNotEmpty(name)) {
// 			this.log('Name cannot be empty')
// 			return
// 		}

// 		if (!this.canAccess(admin)) {
// 			this.log('Access denied')
// 			return
// 		}

// 		this.log(`User craeted: ${name} (${email})`)
// 	}
// }

// const UserService = new UserService()

// UserService.setRole('user')
// UserService.createUser('user@gmail.com', 'user')

// UserService.setRole('admin')
// UserService.createUser('admin@gmail.com', 'admin')

// type Constructor<T> = new (...args: any[]) => T

// function DrawShape<T extends Constructor<{}>>(Base: T) {
// 	return class extends Base {
// 		draw() {
// 			console.log('Drawing a shape')
// 		}
// 	}
// }

// function FillShape<T extends Constructor<{}>>(Base: T) {
// 	return class extends Base {
// 		fill() {
// 			console.log('Filling a shape')
// 		}
// 	}
// }

// class Shape {}

// const MixedShape = FillShape(DrawShape(Shape))

// class Circle extends MixedShape {}

// const circle = new Circle()

// circle.draw() // Output: Drawing a shape
// circle.fill() // Output: Filling a shape
