type FormDataType = {
	email: string
	password: string
	name: string
}

type FormErrorType = {
	email?: string
	password?: string
	name?: string
}

function validateFormData<T extends FormDataType>(form: T): FormErrorType {
	const errors: FormErrorType = {}

	if (!form.email) {
		errors.email = 'Email is required'
	} else if (!/\S+@\S+\.\S+/.test(form.email)) {
		errors.email = 'Email is invalid'
	}

	if (!form.password) {
		errors.password = 'Password is required'
	} else if (form.password.length < 6) {
		errors.password = 'Password must be at least 6 characters long'
	}

	if (!form.name) {
		errors.name = 'Name is required'
	}

	return errors
}

const formData: FormDataType = {
	email: 'exemple@gmail.com',
	password: '123456',
	name: 'John Doe',
}

const errors = validateFormData(formData)
console.log(errors)

type IsEmailValid<T> = T extends { email: string } ? boolean : never

function isEmailValid<T extends FormDataType>(form: T): IsEmailValid<T> {
	return /\S+@\S+\.\S+/.test(form.email) as IsEmailValid<T>
}

const emailValidation = isEmailValid(formData)
console.log(emailValidation) // true

type DynamicFormData = {
	[key: string]: string
}

function validateDynamicFormData<T extends DynamicFormData>(
	form: T
): FormErrorType {
	const errors: FormErrorType = {}
	Object.keys(form).forEach(key => {
		if (!form[key]) {
			errors[key] = `${key} is required`
		}
	})
	return errors
}

const dynamicFormData = {
	email: 'test@gmail.com',
	password: '123456',
	name: 'John Doe',
	customId: '',
}

const dynamicErrors = validateDynamicFormData(dynamicFormData)
console.log(dynamicErrors) // { customId: 'customId is required' }
