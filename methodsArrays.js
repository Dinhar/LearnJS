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