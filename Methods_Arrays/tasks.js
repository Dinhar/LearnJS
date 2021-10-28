// function camelize(str) {
//     let letters = str.split('');

//     for (let letter of letters) {

//         if (letter !== "-") {
//             continue;
//         }
        
//         letters[letters.indexOf(letter) + 1] = letters[letters.indexOf(letter) + 1].toUpperCase();
//         letters.splice(letters.indexOf(letter), 1);
//     }

//     console.log(letters.join(''));
// }

function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


////////////////////



// function filterRange(arr, a, b) {
//     return arr.filter( item => (item >= a && item <= b) );
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)


///////////////


function filterRangeInPlace(arr, a, b) {
    for (let index = 0; index < arr.length; index++) {
        (arr[index] >= a && arr[index] <= b) ? arr[index] : arr.splice(index, 1);
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]