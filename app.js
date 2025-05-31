"use strict";
class Shape {
    constructor(content, radius) {
        this.content = content;
        this.radius = radius;
    }
    getContent() {
        return this.content;
    }
    getRadius() {
        return this.radius;
    }
}
const shape = new Shape('Circle', 5);
console.log(shape.getContent()); // Output: Circle
const shape2 = new Shape(10, 'Large');
console.log(shape2.getRadius()); // Output: Large
