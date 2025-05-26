"use strict";
class Car {
    constructor(nameOrData, year) {
        if (typeof nameOrData === 'string') {
            this.name = nameOrData;
            this.year = year;
        }
        else if (typeof nameOrData === 'object') {
            this.name = nameOrData.name;
            this.year = nameOrData.year;
        }
    }
}
const toyota = new Car('Toyota', new Date(2020, 0, 1));
console.log(toyota);
const chevrolet = new Car({ name: 'Chevrolet', year: new Date(2021, 0, 1) });
console.log(chevrolet);
