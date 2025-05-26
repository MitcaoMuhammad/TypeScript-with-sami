"use strict";
class Employee {
    set salary(value) {
        this._salary = value / 100;
    }
    get salary() {
        return this._salary;
    }
}
const John = new Employee();
John.salary = 50000;
const salary = John.salary;
console.log(salary); // 500
