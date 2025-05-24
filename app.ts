const person = {
	firstName: 'Muhammad',
	lastName: 'Said',
	city: 'Baku',
	skills: {
		programming: 'JavaScript',
		desing: 'Figma',
	},
}

function getName(data: { firstName: string; lastName: string }): string {
	return `${data.firstName} ${data.lastName}`
}

const person1 = getName(person)
console.log(person1)
