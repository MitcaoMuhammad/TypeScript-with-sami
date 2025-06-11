function CreateAt<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		readonly createdAt = new Date()
	}
}

@CreateAt
class Course {
	name = 'TypeScript Course'
	excerpt = 'Learn TypeScript from scratch'
}

@CreateAt
class Lesson {
	name = 'Introduction to TypeScript'
	excerpt = 'Understanding the basics of TypeScript'
}

type CreateEntity = { createdAt: Date }

const cours = new Course() as Course & CreateEntity
const lesson = new Lesson() as Lesson & CreateEntity

console.log(cours.createdAt)
console.log(lesson)
