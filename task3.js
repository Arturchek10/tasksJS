// Поиск индекса элемента в массиве
let arr = ['cat', 'dog', 'parrot', 'horse'];
console.log(arr.indexOf('parrot'));

// второй способ

const parrotIndex = arr.findIndex(item => item === 'parrot');
console.log(parrotIndex);