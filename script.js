// Простые
   let number = 1234 // Числовой тип
// объявление инициализация
let double = 12.43

let string = "some string" // Строковый тип
let string1 = 'some string 1'

let boolean = true // Логический тип
let boolean1 = false

let undef = undefined // Пустые значения
// NaN, null

let symb = Symbol("some") // Символ

// Составные
let array = [] // Массив

let obj = {} // Объект

let func = function(a, b ,c) {} // Функция
let func1 = (a, b ,c) => {} // Стрелочная функция
function func2(a, b, c) {}

// В JS 8 типов данных

let  value

value = 1432 // Переменную можно инициализировать в процессе

value = "string"


const yep = "VALUE" // Константная ссылка на переменную в памяти

// yep = "Other value" // error - нельзя изменять значение константы

const obj1 = {
    key: "value"
}

obj1.key // "value"

obj1.key = "value1"
obj1.key1 = "value_112"

console.log(obj1)

const arr = []

console.log("this array - ", arr)

arr.push("string")

console.log("this array - ", arr)

// const num = prompt("Введите число") // Запрос данных у пользователя
const num = 0// parseInt(prompt("Введите число"))
console.log(typeof num, num)
console.log(typeof parseInt(num), num) // parseInt превращает текст в число

let res = ""

if (Number.isNaN(num)){
    res = "Введено не число"
}
else if(num > 10){
    res = "Число больше загаданного"
}
else if(num === 10){
    res = "Вы угадали"
} // === проверяет равенство не только значения, но и его типа, а == проверяет без сравнения типа
else {
    res = "Число меньше загаданного"
}

// alert(res)

const a = 144
const b = 0.5

let c
c = a + b
c = a * b
c = a - b
c = a / b
c = a**b // Степень
c = a % b // Взятие остатка от деления

console.log(c)

// 1. Запросить два числа
// 2. Запросить операцию
// 3. Вернуть ошибку или результат

// // const num1 = +prompt("Введите первое число")
// // const num2 = +prompt("Введите второе число")
// // const operation = prompt("Введите операцию")

// //if (Number.isNaN(num1) || Number.isNaN(num2)){
//     //alert("Некорректные числа")
// //}

// // else {
// //     let result

//     // if (operation === "+"){
//     //     result = num1 + num2
//     // }
//     // else if(operation === "-"){
//     //     result = num1 - num2
//     // }
//     // else if(operation === "*"){
//     //     result = num1 * num2
//     // }
//     // else if(operation === "/"){
//     //     result = num1 / num2
//     // }
//     // else if(operation === "**"){
//     //     result = num1 ** num2
//     // }
//     // else if(operation === "%"){
//     //     result = num1 % num2
//     // }
    
//     switch(operation){
//         case "/":
//             result = num1 / num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "**":
//             result = num1 ** num2
//             break
//         case "%":
//             result = num1 % num2
//             break
//         default:
//             result = undefined
//     }

//     // на два кейса можно задавать один брейк
//     // switch(operation){
//     //     case "/":
//     //      case "делить":
//     //         result = num1 / num2
//     //         break
//     //     case "*":
//     //         result = num1 * num2
//     //         break
//     //     default:
//     //         result = undefined
//     // }

//     if(result === undefined){
//         // alert("Некорректная операция")
//     }
//     else {
//        // alert("Результат - " + result)
//     }
// }

// for(let i = 0; i < 10; i = i++){ // i = i + 1 === i++
//     console.log("Итерация №", i)
// }

let flag = true

while(flag){
    const n = Math.round(Math.random() * 99 + 1)    // Math.round - округление в ближайшую сторону
    flag = n % 4 !== 3
    // if (n % 4 == 3) {
    //     flag = false
    // }
    console.log(n)
}

let i = 0

do {
    console.log("do..while")
} while(i > 0)

while(i > 0) {
    console.log("while")
}