// arr.splice(index[, deleteCount, elem1, ..., elemN])

// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1);

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0, 3, "Давай", "танцевать");

// console.log( arr );


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// let removed = arr.splice(0, 2);

// console.log( removed );


// let arr = ["Я", "изучаю", "JavaScript"];

// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");

// console.log( arr );

// let arr = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5


// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1
// console.log( arr.includes(1) ); // true


// let result = arr.find(function(item ,index, array) {
//     // если true - возравщается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
// ];

// let user = users.find(item => item.id == 1);
// console.log(user.name);

// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers); // 2

// let result = arr.map(function(item, index, array) {
//     // возвращается новое значение вместо элемента
// });

// let lengths = ["bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6


// let arr = [ 1, 2, 15 ];
// // метод сортирует содержимое arr
// arr.sort();

// console.log( arr ); // 1, 15, 2


// function compareNumeric(a, b) {
//     if (a > b) return 1; // если первое значение больше второго
//     if (a == b) return 0; // если равны
//     if (a < b) return -1; // если первое значение меньше второго
// }

// let arr = [ 15, 1, 2 ];

// // arr.sort(compareNumeric);
// // console.log(arr); // 1, 2, 15

// arr.sort( (a, b) => a - b );
// console.log( arr );


// let arr = [1,2,3,4,5];
// arr.reverse();

// console.log( arr );

// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');

// for (let name of arr) {
//     console.log(`Сообщение получат: ${name}.`);
// }

// let str = "тест";
// console.log( str.split('') ); // т,е,с,т


// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(';');

// console.log(str);

// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
// }, [initial]);

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result);