"use strict";
class PriceService {
    constructor() {
        this.prices = {};
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
