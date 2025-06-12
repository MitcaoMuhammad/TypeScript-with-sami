class ProductService {
	private products: { id: number; name: string; price: number }[] = []

	addProduct(product: { id: number; name: string; price: number }) {
		this.products.push(product)
	}

	getProducts() {
		return this.products
	}

	getProductById(id: number) {
		return this.products.find(product => product.id === id)
	}
}
