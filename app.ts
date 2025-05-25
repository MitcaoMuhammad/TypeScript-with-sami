function throwError(message: string): never {
	throw new Error('This is an error from the throwError function.')
}

async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		console.log('Data fetched successfully:', data)
	} catch (error) {
		throwError('Failed to fetch data: ' + error)
	}
}

fetchData()
