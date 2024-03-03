// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * 2 + b * 2;
}

const rectangle_1 = rectangle(10, 10);
console.log(rectangle_1)
//======================================================================================================================
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * r * r
}

const radius = circle(10);
console.log(radius)
//======================================================================================================================
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

const cylinder_1 = cylinder(10, 10)
console.log(cylinder_1)
//======================================================================================================================
// - створити функцію яка приймає масив та виводить кожен його елемент
const modules = ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java'];

function itarArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

itarArr(modules)
//======================================================================================================================
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('Lorem.')
//======================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList_3li(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}

createList_3li('Lorem ipsum.')
//======================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList_countli(text, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList_countli(`Lorem ipsum dolor.`, 4);
//======================================================================================================================
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList_arr(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

createList_arr(modules)
//======================================================================================================================
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
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
    {id: 11, name: 'max', age: 31}
];

function createList_arrdiv(arr) {
    for (const arrElement of arr) {
        document.write(`<div>id: ${arrElement.id} <br> Name: ${arrElement.name} <br> Age: ${arrElement.age}</div>`)
    }
}

createList_arrdiv(users)
//======================================================================================================================
// - створити функцію яка повертає найменьше число з масиву
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arr_minNumber(arr) {
    let minNumber = arr[0]
    for (let arrElement of arr) {
        if (minNumber < arrElement) {
            arrElement = minNumber
        }
    }
    return minNumber
}

let mn = arr_minNumber(numbers);
console.log(mn);
//======================================================================================================================
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = [1, 2, 10];

function sumArr(arr) {
    let total = 0;
    for (const arrElement of arr) {
        total += arrElement
    }
    return total
}

const s = sumArr(sum);
console.log(s)
//======================================================================================================================
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapsum = [11, 22, 33, 44];

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
}

swap(swapsum, 0, 1)
//======================================================================================================================
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            result = sumUAH / currencyValues[i].value;
            break;
        }
    }
    return result;
}
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
//======================================================================================================================