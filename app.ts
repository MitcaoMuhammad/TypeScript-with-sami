let data: (string | number)[] = ['Alice', 30, 'Bob', 25, 'Charlie', 35]

// Type Narrowing - turni tekshirish

// function logError(error: { message: string } | { error: string }) {
// 	if ('message' in error) {
// 		console.log(`Error message: ${error.message}`)
// 	} else {
// 		console.log(`Error: ${error.error}`)
// 	}
// }

// logError({ message: 'Something went wrong!' })
// logError({ error: 'Failed to connect to the server.' })

// function getVal(value: string | number): string | number {
// 	if (typeof value === 'string') {
// 		return value.toUpperCase()
// 	} else if (typeof value === 'number') {
// 		return value.toFixed(2)
// 	}

// 	return `Unknown type: ${value}`
// }

// console.log(getVal('hello'))
// console.log(getVal(123.456))

// function printID(id: number | string): void {
// 	console.log(`The ID is: ${id}`)
// }

// printID(101)
// printID('202A')
