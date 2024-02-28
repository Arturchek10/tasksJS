//Фильтрация массива filter()

let arr = [31, 10, 'chicken', 9, 'fish', 10];

const filterArr = arr.filter(item => typeof(item) === 'string')
console.log(filterArr);

let arr2 = [31, 10, 'chicken', 9, 'fish', 10];
const filterArr2 = arr2.filter(item => item === 10);
console.log(filterArr2);
