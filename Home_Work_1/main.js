// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log
const a1 = 'hello';
const a2 = 'owu';
const a3 = 'com';
const a4 = 'ua';
const a5 = 1;
const a6 = 10;
const a7 = -999;
const a8 = 123;
const a9 = 3.14;
const a10 = 2.7;
const a11 = 16;
const a12 = true;
const a13 = false;
console.log(a1, a2, a3, a4, a5, a6, a7, a7, a8, a9, a10, a11, a12, a13)
//========================================================================================================
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Oleg';
const middleName = 'Podusovsky';
const lastName = 'Mikhailovich';
const person = `${firstName} ${middleName} ${lastName}`
console.log(person)
//========================================================================================================
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
const a = 100;
const b = '100';
const c = true;
console.log(typeof a, typeof b, typeof c)
//========================================================================================================
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const name = prompt('Ваше Імям?');
const surname = prompt('По-Батькові?')
const age = +prompt('Скільки вам Років?')
alert(`Привіт ${name}`)
console.log(name,surname,age)
//========================================================================================================
















