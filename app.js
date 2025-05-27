"use strict";
class Calculator {
    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    getValue() {
        return this.value;
    }
}
const calculator = new Calculator();
const res = calculator.add(10).subtract(5).multiply(2).getValue(); // 10
console.log(res); // 10
// class Counter {
// 	count: number
// 	increment() {
// 		console.log(this)
// 	}
// }
// const c = new Counter()
// const incrementFN = c.increment
// incrementFN() // undefined
