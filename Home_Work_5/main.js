// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => a * 2 + b * 2;
console.log(rectangle(10, 10));
//======================================================================================================================
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (r) => Math.PI * r * r;
console.log(circle(10))
//======================================================================================================================
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (r, h) => 2 * Math.PI * r * (r + h);
console.log(cylinder(10, 10));
//======================================================================================================================
// - створити функцію яка приймає масив та виводить кожен його елемент
const modules = ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java'];
const iterArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
iterArr(modules)
//======================================================================================================================
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraph = text => document.write(`<p>${text}</p>`);
paragraph(`Lorem ipsum dolor sit amet.`)
//======================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList_3li = text => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
createList_3li('Lorem ipsum.')
//======================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createList_countli = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createList_countli('Lorem ipsum dolor sit amet.', 5);
//======================================================================================================================
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createListArr = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
createListArr(modules)
//======================================================================================================================
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 32}
];

const arrlist = arr => {
    for (const arrElement of arr) {
        document.write(`<div>Id: ${arrElement.id} <br> Name: ${arrElement.name} <br> Age: ${arrElement.age} <br><br></div>`)
    }
}
arrlist(users)
//======================================================================================================================
// - створити функцію яка повертає найменьше число з масиву
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMinNumber = (arr) => {
    let minNumber = arr[0]
    for (const number of arr) {
        if (number < minNumber) {
            minNumber = number
        }
    }
    return minNumber
}
let a = arrMinNumber(numbers);
console.log(a)
//======================================================================================================================
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = [1, 2, 10];
const arr_sun = arr => {
    let total = 0;
    for (const num of arr) {
        total += num
    }
    return total
}
let b = arr_sun(sum)
console.log(b)
//======================================================================================================================
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = [11, 22, 33, 44];
const arr_swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
}
arr_swap(swap,0,1)
//======================================================================================================================
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let result = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            result = sumUAH / currencyValues[i].value;
            break;
        }
    }
    return result;
};
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
//======================================================================================================================