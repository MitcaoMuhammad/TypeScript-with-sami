export enum Role {
	Admin,
	STUDENT,
}

class User {
	id: number
	name: string
	role: Role

	constructor(id: number, name: string, role: Role) {
		this.id = id
		this.name = name
		this.role = role
	}
}

class Course {
	private students: User[] = []
	id: number
	title: string
	description: string

	constructor(id: number, title: string, description: string) {
		this.id = id
		this.title = title
		this.description = description
	}

	get studentList(): string {
		return this.students.map(student => student.name).join(', ')
	}

	enrollStudent(student: User): void {
		if (student.role === Role.STUDENT) {
			this.students.push(student)
			console.log(`Student ${student.name} enrolled in course ${this.title}`)
		} else {
			console.log('Only students can enroll in courses')
		}
	}
}

class Admin extends User {
	constructor(id: number, name: string) {
		super(id, name, Role.Admin)
	}

	addCourse(course: Course, courses: Course[]): void {
		courses.push(course)
		console.log(`Course added: ${course.title}`)
	}

	getStudentList(course: Course): void {
		console.log(`Students in course ${course.title}: ${course.studentList}`)
	}
}

class Student extends User {
	constructor(id: number, name: string) {
		super(id, name, Role.STUDENT)
	}

	enrollInCourse(course: Course): void {
		course.enrollStudent(this)
	}
}

// Backtest

const courses: Course[] = []
const admin = new Admin(1, 'Admin')
const student1 = new Student(2, 'Student 1')
const student2 = new Student(3, 'Student 2')

const course2 = new Course(
	2,
	'Advanced TypeScript',
	'Deep dive into TypeScript features'
)

admin.addCourse(course2, courses)

student1.enrollInCourse(course2)
student2.enrollInCourse(course2)

admin.getStudentList(course2)
