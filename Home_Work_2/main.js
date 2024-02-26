// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arrElements = [];
arrElements[0] = 'HTML';
arrElements[1] = 'JS';
arrElements[2] = 'MySQL';
arrElements[3] = 'MongoDB'
arrElements[4] = 'React';
arrElements[5] = 'JSNode';
arrElements[6] = true;
arrElements[7] = false;
arrElements[8] = 1;
arrElements[9] = 2;
console.log(arrElements)
//======================================================================================================================
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const objectbook1 = {title: 'Відьмак', pageCount: 312, genre: 'фентезі'};
const objectbook2 = {title: 'Меч Призначення', pageCount: 384, genre: 'фентезі'};
const objectbook3 = {title: 'Кров Ельфів', pageCount: 360, genre: 'фентезі'};
console.log(objectbook1, objectbook2, objectbook3)
//======================================================================================================================
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const objectbook4 = {
    title: 'Година Презирства',
    pageCount: 352,
    genre: 'фентезі',
    authors: [{name: 'Анджей Сапковський', age: 73}]
}
const objectbook5 = {
    title: 'Вежа Ластівки',
    pageCount: 352,
    genre: 'фентезі',
    authors: [{name: 'Анджей Сапковський', age: 73}]
}
const objectbook6 = {
    title: 'Хрещення Вогнем',
    pageCount: 480,
    genre: 'фентезі',
    authors: [{name: 'Анджей Сапковський', age: 73}]
}
console.log(objectbook4, objectbook5, objectbook6)
//======================================================================================================================
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: 'Margot Robbie', username: 'Margot', password: 'Password001'},
    {name: 'Chloe Grace Moretz', username: 'Chloe', password: 'Password002'},
    {name: 'Jean-Claude Van Damme', username: 'Jean', password: 'Password003'},
    {name: 'Arnold Schwarzenegger', username: 'Arnold', password: 'Password004'},
    {name: 'Megan Fox', username: 'Megan', password: 'Password005'},
    {name: 'Anne Hathaway', username: 'Anne', password: 'Password006'},
    {name: 'Emma Stone', username: 'Emma', password: 'Password007'},
    {name: 'Bruce Willis', username: 'Bruce', password: 'Password008'},
    {name: 'Henry Cavill', username: 'Henry', password: 'Password009'},
    {name: 'Jennifer Lawrence', username: 'Jennifer', password: 'Password010'},
];
console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
//======================================================================================================================
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 1;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
//======================================================================================================================
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 0;
if (time >= 0 && time <= 15) {
    console.log('В першу частину години')
} else if (time >= 16 && time <= 30) {
    console.log('В другу частину години')
} else if (time >= 31 && time <= 45) {
    console.log('В третю частину години')
} else if (time >= 46 && time <= 59) {
    console.log('В четверту частину години')
} else {
    console.log('Error')
}
//======================================================================================================================
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 22;
if (day >= 1 && day <= 10) {
    console.log('В першу')
} else if (day >= 11 && day <= 20) {
    console.log('В другу')
} else if (day >= 21 && day <= 31) {
    console.log('В третю')
} else {
    console.log('Error')
}
//======================================================================================================================
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//   (можна замість плану на день, назву дня англійською).
const week = 1;
switch (week) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Чутверг')
        break;
    case 5:
        console.log('П\'ятниця')
        break;
    case 6:
        console.log('Субота')
        break;
    case 7:
        console.log('Неділя')
        break
    default:
        console.log('Error')
}
//======================================================================================================================
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const num1 = 2;
const num2 = 2;
if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else if (num1 === num2) {
    console.log('Числа Рівні')
} else {
    console.log('Error')
}
//======================================================================================================================
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1 = 5 || "default";
console.log(x1);

let x2 = false
console.log(x1 = x2 || "default")
//======================================================================================================================
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//       За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// пробував через else if але так виводиться тільки 1 обєкт
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
//======================================================================================================================