// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for(let i = 1; i < 11; i++) {
    console.log(2 ** i)
}

// or

for(let i = 1; i < 11; i++) {
    console.log(Math.pow(2,i))
}



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const pow = function(counter) {
    for(let i = 1; i <= counter; i++) {
        console.log(2 ** i)
    }
}
pow(10)



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let result = ''
let smile = ':)'
for (let i = 1; i < 6; i++) {
    console.log(result += smile)
}

// or

for(let i = 1; i < 6; i++) {
    console.log(smile.repeat(i))
}



// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
let result_2 = ''
function smile_1(str, numberOfRows) {
    for(let i = 1; i <= numberOfRows; i++) {
        result_2 = result_2 + str
        console.log(result_2)
    }
}
smile_1(':(', 10)



// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'
function getWordStructure(word) {
    const vowels = 'aeiouy'.split('');
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('');
    
    let vowelsCount = 0;
    let consonantsCount = 0;

    for(const char of word.toLowerCase()) {
        if(vowels.includes(char)) vowelsCount++
        else if(consonants.includes(char)) consonantsCount++
    }
    console.log(`В слове ${word} ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}
getWordStructure("Check-list")



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'
function isPalindrom(word) {
    word = word.toLowerCase
    for(let i=0, j=word.lenght-1; i<word.lenght, j>=0; i++, i--) {
        if(word[i] !== word[j]) {
            return false
        }
    }
    return true
}
console.log(isPalindrom('Abba'))

// or


function isPalindrom2(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}
console.log(isPalindrom2('Abba'))

// or

function isPalindrom3(word) {
    word= word.toLowerCase()
    for(let i = 0; i<=word.lenght/2; i++) {
        if(word[i] !== word[word.lenght-1-i])
        return false
    }
    return true
}
console.log(isPalindrom3('Abba'))