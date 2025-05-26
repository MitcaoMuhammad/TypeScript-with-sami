enum Role {
	Admin,
	STUDENT,
}

interface IUser {
	id: number
	name: string
	role: Role
}

interface ICourse {
	id: number
	title: string
	description: string
	students: IUser[]
}

function isAdmin(user: IUser): user is IUser & { role: Role.Admin } {
	return user.role === Role.Admin
}

const courses: ICourse[] = []

function addCourse(user: IUser, course: ICourse) {
	if (isAdmin(user)) {
		courses.push(course)
		console.log(`Course added ${course.title} `)
	} else {
		console.log('only admin can add courses')
	}
}

function enrollStudent(user: IUser, courseId: number) {
	const course = courses.find(course => course.id === courseId)

	if (!course) {
		console.log('Course not found')
		return
	}

	if (user.role === Role.STUDENT) {
		course.students.push(user)
		console.log(`student enrolled ${user.name}`)
	} else {
		console.log('only students can enroll')
	}
}

function listStudents(user: IUser, courseId: number) {
	if (!isAdmin(user)) {
		console.log('only admin can see list students')
		return
	}

	const course = courses.find(course => course.id === courseId)
	if (!course) {
		console.log('course not found')
		return
	}

	console.log(
		`students in  ${course.title}: ${course.students
			.map(s => s.name)
			.join(', ')}`
	)
}

// data
const admin: IUser = {
	id: 1,
	name: 'Admin User',
	role: Role.Admin,
}
const student1: IUser = {
	id: 2,
	name: 'Student One',
	role: Role.STUDENT,
}
const student2: IUser = {
	id: 3,
	name: 'Student Two',
	role: Role.STUDENT,
}
const course1: ICourse = {
	id: 1,
	title: 'TypeScript Basics',
	description: 'Learn the basics of TypeScript',
	students: [],
}
const course2: ICourse = {
	id: 2,
	title: 'Advanced TypeScript',
	description: 'Deep dive into TypeScript features',
	students: [],
}

// calling functions
addCourse(admin, course1)

enrollStudent(student1, 1)
enrollStudent(student2, 1)
listStudents(admin, 1)

console.log(courses)
