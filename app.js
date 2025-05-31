"use strict";
function validateFormData(form) {
    const errors = {};
    if (!form.email) {
        errors.email = 'Email is required';
    }
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email is invalid';
    }
    if (!form.password) {
        errors.password = 'Password is required';
    }
    else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }
    if (!form.name) {
        errors.name = 'Name is required';
    }
    return errors;
}
const formData = {
    email: 'exemple@gmail.com',
    password: '123456',
    name: 'John Doe',
};
const errors = validateFormData(formData);
console.log(errors);
function isEmailValid(form) {
    return /\S+@\S+\.\S+/.test(form.email);
}
const emailValidation = isEmailValid(formData);
console.log(emailValidation); // true
function validateDynamicFormData(form) {
    const errors = {};
    Object.keys(form).forEach(key => {
        if (!form[key]) {
            errors[key] = `${key} is required`;
        }
    });
    return errors;
}
const dynamicFormData = {
    email: 'test@gmail.com',
    password: '123456',
    name: 'John Doe',
    customId: '',
};
const dynamicErrors = validateDynamicFormData(dynamicFormData);
console.log(dynamicErrors); // { customId: 'customId is required' }
