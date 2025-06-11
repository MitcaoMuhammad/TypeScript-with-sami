"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function CreateAt(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
let Course = class Course {
    constructor() {
        this.name = 'TypeScript Course';
        this.excerpt = 'Learn TypeScript from scratch';
    }
};
Course = __decorate([
    CreateAt
], Course);
let Lesson = class Lesson {
    constructor() {
        this.name = 'Introduction to TypeScript';
        this.excerpt = 'Understanding the basics of TypeScript';
    }
};
Lesson = __decorate([
    CreateAt
], Lesson);
const cours = new Course();
const lesson = new Lesson();
console.log(cours.createdAt);
console.log(lesson);
