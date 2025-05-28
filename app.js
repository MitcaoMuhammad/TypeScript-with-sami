"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["STUDENT"] = 1] = "STUDENT";
})(Role || (exports.Role = Role = {}));
class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
class Course {
    constructor(id, title, description) {
        this.students = [];
        this.id = id;
        this.title = title;
        this.description = description;
    }
    get studentList() {
        return this.students.map(student => student.name).join(', ');
    }
    enrollStudent(student) {
        if (student.role === Role.STUDENT) {
            this.students.push(student);
            console.log(`Student ${student.name} enrolled in course ${this.title}`);
        }
        else {
            console.log('Only students can enroll in courses');
        }
    }
}
class Admin extends User {
    constructor(id, name) {
        super(id, name, Role.Admin);
    }
    addCourse(course, courses) {
        courses.push(course);
        console.log(`Course added: ${course.title}`);
    }
    getStudentList(course) {
        console.log(`Students in course ${course.title}: ${course.studentList}`);
    }
}
class Student extends User {
    constructor(id, name) {
        super(id, name, Role.STUDENT);
    }
    enrollInCourse(course) {
        course.enrollStudent(this);
    }
}
// Backtest
const courses = [];
const admin = new Admin(1, 'Admin');
const student1 = new Student(2, 'Student 1');
const student2 = new Student(3, 'Student 2');
const course2 = new Course(2, 'Advanced TypeScript', 'Deep dive into TypeScript features');
admin.addCourse(course2, courses);
student1.enrollInCourse(course2);
student2.enrollInCourse(course2);
admin.getStudentList(course2);
