class Employee {
	private _salary: number
	_password: string

	set salary(value: number) {
		this._salary = value / 100
	}

	get salary(): number {
		return this._salary
	}
}

const John = new Employee()
John.salary = 50000
const salary = John.salary
console.log(salary) // 500
