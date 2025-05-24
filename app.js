"use strict";
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const checkAdult = (age) => {
    if (age >= 18) {
        return true;
    }
    return false;
};
const person1 = getName('Ali', 'Valiyev');
console.log(person1);
const isAdult = checkAdult(20);
console.log(isAdult);
// any: xoxlagan turdagi malimot qabul qilinadi
// void: hech qanday malimot qaytarmaydi
