class PriceService {
	private prices: { [key: string]: number } = {}

	constructor() {
		// Initialize with some default prices
		this.prices['apple'] = 1.0
		this.prices['banana'] = 0.5
		this.prices['orange'] = 0.75
	}

	getPrice(item: string): number {
		return this.prices[item] || 0
	}

	setPrice(item: string, price: number): void {
		this.prices[item] = price
	}
}
