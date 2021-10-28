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

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3));
// // e, s
// console.log( arr.slice(-2));
// // s, t

// let arr = [1, 2];

// console.log( arr.concat([3, 4]) ); // 1,2,3,4
// console.log( arr.concat([3, 4], [5, 6]) ); //1,2,3,4,5,6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// let arr = [1, 2];
// let arrayLike = {
//     0: "что-то",
//     length: 1
// };

// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

// let arr = [1, 2];
// let arrayLike = {
//     0: "что-то",
//     1: "еще что-то",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// console.log( arr.concat(arrayLike) ); // 1,2,что-то, еще что-то


// arr.forEach(function(item, index, array) {
//     // делать что-то с item
// });

// Вызов alert для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
// });

