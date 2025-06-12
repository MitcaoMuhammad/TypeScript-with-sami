declare class ProductService {
    private products;
    addProduct(product: {
        id: number;
        name: string;
        price: number;
    }): void;
    getProducts(): {
        id: number;
        name: string;
        price: number;
    }[];
    getProductById(id: number): {
        id: number;
        name: string;
        price: number;
    } | undefined;
}
