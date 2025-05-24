function getName(firstName: string, lastName: string): string {
	return `${firstName} ${lastName}`
}

const checkAdult = (age: number): boolean => {
	if (age >= 18) {
		return true
	}
	return false
}

const person1 = getName('Ali', 'Valiyev')
console.log(person1)

const isAdult = checkAdult(20)
console.log(isAdult)

// any: xoxlagan turdagi malimot qabul qilinadi
// void: hech qanday malimot qaytarmaydi
