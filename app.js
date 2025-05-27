"use strict";
class Car {
    constructor(model) {
        this.model = model;
    }
    startEngine() {
        console.log(`${this.model} engine started.`);
    }
    drive(speed) {
        console.log(`${this.model}: driving at ${speed} km/hr.`);
    }
    fly(speed) {
        console.log(`${this.model}: flying at ${speed} km/hr.`);
    }
}
const Toyota = new Car('Toyota');
Toyota.startEngine();
Toyota.drive(100);
Toyota.fly(200);
const Honda = new Car('Honda');
Honda.startEngine();
Honda.drive(120);
Honda.fly(250);
