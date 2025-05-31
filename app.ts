// Readonly = O'zgaruvchan tipni o'zgarmas qilib qo'yish yani faqat o'qish uchun
// Required = O'zgaruvchan tipdagi barcha xususiyatlarni majburiy qilish
// Partial = O'zgaruvchan tipdagi barcha xususiyatlarni ixtiyoriy qilish
// Pick = Asosiy typdan kerakli xususiyatlarni tanlash
// Omit = Asosiy typdan kerakli xususiyatlarni chiqarib tashlash
// Extract = Ikkita tipdan umumiy xususiyatlarni olish
// Exclude = Ikkita tipdan umumiy xususiyatlarni chiqarib tashlash
// ReturnType = Funksiya tipidan qaytish tipini olish
// Parameters = Funksiya tipidan parametrlar tipini olish
// constructor parameters = classning konstruktoridagi parametrlar tipini olish
// Awaited = Promise ichidagi tipni olish

async function fetchData(): Promise<string> {
	return 'Data'
}

type FetchDataReturnType = Awaited<ReturnType<typeof fetchData>> // string
// type FetchDataReturnType = ReturnType<typeof fetchData> // string

const data: FetchDataReturnType = 'data'

// class Person {
// 	constructor(public name: string, public age: number) {}
// }

// type PersonConstructorParameters = ConstructorParameters<typeof Person> // [string, number]

// const personParams: PersonConstructorParameters = ['John', 30]
// const person = new Person(...personParams)

// function add(a: number, b: number): number {
// 	return a + b
// }

// type AddReturnType = ReturnType<typeof add> // number
// type AddParametersType = Parameters<typeof add> // [number, number]

// const params: AddParametersType = [5, 10]

// const result: AddReturnType = add(...params)
// console.log(result) // 15
