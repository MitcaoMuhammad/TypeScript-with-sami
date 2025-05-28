interface IUser {
	id: number
	name: string
	username: string
	email: string
}

interface IPost {
	id: number
	title: string
	body: string
	userId: number
}

async function fetchData<T>(endpoint: string): Promise<T> {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/${endpoint}`
		)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const data: T = await response.json()
		return data
	} catch (error) {
		throw new Error(`Failed to fetch data from ${endpoint}: ${error}`)
	}
}

async function getUsers() {
	const users = await fetchData<IUser[]>('users')
	users.forEach(c => console.log(c.name))
}

async function getPosts() {
	const posts = await fetchData<IPost[]>('posts')
	posts.forEach(p => console.log(p.title))
}

getPosts()
getUsers()
