declare class PriceService {
    private prices;
    constructor();
    getPrice(item: string): number;
    setPrice(item: string, price: number): void;
}
