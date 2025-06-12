"use strict";
class PriceService {
    constructor() {
        Object.defineProperty(this, "prices", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        this.prices['apple'] = 1.0;
        this.prices['banana'] = 0.5;
        this.prices['orange'] = 0.75;
    }
    getPrice(item) {
        return this.prices[item] || 0;
    }
    setPrice(item, price) {
        this.prices[item] = price;
    }
}
//# sourceMappingURL=price.service.js.map