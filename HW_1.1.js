// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
const age_2 = 18
const age_3 = 60
const checkAge = function(age) {
    if (age < age_2) {
        console.log("You dont have acces cause your age is " + age + ". It's less then")
    } else if (age >= age_2, age <= age_3) {
        console.log("Welcome !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel :D")
    } else {
        console.log("Technical work")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)




// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
const age_2 = 18
const age_3 = 60
const checkAge = function(age) {
    if (typeof age !== 'number') {
        console.log('Not a number!')
    } else if (age < age_2) {
        console.log("You dont have acces cause your age is " + age + ". It's less then")
    } else if (age >= age_2, age <= age_3) {
        console.log("Welcome !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel :D")
    } else {
        console.log("Technical work")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('2')

// console.log(typeof ""); // "string"
// console.log(typeof "hello"); // "string"
// console.log(typeof String("hello")); // "string"
// console.log(typeof new String("hello")); // "object"
// console.log(typeof 0); // "number"
// console.log(typeof -0); // "number"
// console.log(typeof 0xff); // "number"
// console.log(typeof -3.142); // "number"
// console.log(typeof Infinity); // "number"
// console.log(typeof -Infinity); // "number"
// console.log(typeof NaN); // "number"
// console.log(typeof Number(53)); // "number"
// console.log(typeof new Number(53)); // "object"
// console.log(typeof true); // "boolean"
// console.log(typeof false); // "boolean"
// console.log(typeof new Boolean(true)); // "object"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof []); // "object"
// console.log(typeof Array(5)); // "object"
// console.log(typeof function() {}); // "function"
// console.log(typeof new Function); // "function"
// console.log(typeof new Date); // "object"
// console.log(typeof /^(.+)$/); // "object"
// console.log(typeof new RegExp("^(.+)$")); // "object"
// console.log(typeof {}); // "object"
// console.log(typeof new Object); // "object" 



// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const age_2 = 18
const age_3 = 60
const checkAge = function(age) {
    age = Number(age)
    if (isNaN(age)) {
        console.log("Not a number!")
    } else if (age < age_2) {
        console.log("You dont have acces cause your age is " + age + ". It's less then")
    } else if (age >= age_2, age <= age_3) {
        console.log("Welcome !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel :D")
    } else {
        console.log("Technical work")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('2')
checkAge('string')



// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
const age_2 = 18
const age_3 = 60
const div = document.getElementById('d')
let age = prompt("Введите ваш возраст:")
if (age && !isNaN(age)) {
    if (age < age_2) {
        div.innerHTML+="You dont have acces cause your age is " + age + ". It's less then";
    } else if (age >= age_2, age <= age_3) {
        div.innerHTML+="Welcome !";
    } else if (age > age_3) {
        div.innerHTML+="Keep calm and look Culture channel";
    } else {
        div.innerHTML+="Technical work";
    }
} else div.innerHTML+="Not an integer value";
