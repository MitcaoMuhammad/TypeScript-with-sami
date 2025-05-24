enum website {
	facebook = 'https://www.facebook.com',
	twitter = 'https://www.twitter.com',
	instagram = 'https://www.instagram.com',
	youtube = 'https://www.youtube.com',
}

let person: {
	id: number
	name: string
	isMarried: boolean
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string | number
		geo: [number, number]
	}
	phone: number
	website: website
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
} = {
	id: 1,
	name: 'Leanne Graham',
	isMarried: false,
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: 929983874,
		geo: [-37.3159, 81.1496],
	},
	phone: 17707368031,
	website: website.facebook,
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets',
	},
}
