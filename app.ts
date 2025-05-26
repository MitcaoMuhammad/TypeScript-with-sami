enum Provider {
	Payme,
	Click,
	Uzum,
}

enum Status {
	Pending,
	Approvd,
	Rejected,
}

class Payment {
	id: Provider
	status: Status
	craatedAt: Date
	updatedAt: Date

	constructor(id: Provider) {
		this.id = id
		this.status = Status.Pending
		this.craatedAt = new Date()
		this.updatedAt = new Date()
	}

	getLifeTime(): number {
		return new Date().getTime() - this.craatedAt.getTime()
	}

	rejectPayment() {
		if (this.status === Status.Approvd) {
			throw new Error('Payment already approved, cannot be rejected.')
		}
		this.status = Status.Rejected
		this.updatedAt = new Date()
	}
}

const payme = new Payment(Provider.Payme)
payme.status = Status.Approvd
setTimeout(() => {
	payme.rejectPayment()
	console.log(payme)
	const duration = payme.getLifeTime()
	console.log(duration)
	console.log(payme)
}, 1000)

// class Person {
// 	name: string

// 	constructor(name: string) {
// 		this.name = name
// 	}

// 	greeting(age: number): string {
// 		return `Hello ${this.name}, you are ${age} years old!`
// 	}
// }

// const user1 = new Person('Muhammad')
// user1.greeting(17)

// const user2 = new Person('Abdulbosit')
// console.log(user2)
// user2.greeting(17)
