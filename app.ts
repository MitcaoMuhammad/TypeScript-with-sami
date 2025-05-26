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
	providers: string[]

	constructor(id: Provider) {
		this.id = id
		this.status = Status.Pending
		this.craatedAt = new Date()
		this.updatedAt = new Date()
		this.providers = []
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

	getProviders(provider: string): void
	getProviders(providers: string[]): void
	getProviders(providerOrProviders: string | string[]): void {
		if (typeof providerOrProviders === 'string') {
			this.providers.push(providerOrProviders)
		} else if (Array.isArray(providerOrProviders)) {
			this.providers = this.providers.concat(providerOrProviders)
		}
	}
}

const payme = new Payment(Provider.Payme)

payme.getProviders('Payme')
console.log(payme.providers) // ['Payme']
payme.getProviders(['Click', 'Uzum'])
console.log(payme.providers) // ['Payme', 'Click', 'Uzum']
