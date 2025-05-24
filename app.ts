const cars: string[] = ['BMW', 'Audi', 'Mercedes']
const numbers: number[] = [1, 2, 3, 4, 5]
const bools: boolean[] = [true, false, true, false]

// union types
const mixed: (string | number)[] = ['BMW', 1, 'Audi', 2]

// const result = numbers
// 	.map(num => `Numbers: ${num}`)
// 	.filter(num => num.includes('2'))
// console.log(result)

// const upperCaseCars = cars
// 	.map(car => car.toUpperCase())
// 	.filter(car => car.startsWith('B'))
// console.log(upperCaseCars)
