type Status = 'success' | 'error'

function getStatus(status: Status): Status {
	if (status === 'success') {
		return 'success'
	}
	return 'error'
}

console.log(getStatus('success')) // Output: 'success'
console.log(getStatus('error')) // Output: 'error'

// let isMarried: true
// isMarried = true

// let code: 200| 400 | 500 = 200
// code = 400

// let statusMessage: 'success' | 'error' | 'loading' = 'loading'
// statusMessage = 'success'

// literal type - turli turdaki qiymatlar uchun ishlatiladi
// union type - aniq turdagi qiymatlarni qabul qiladi
