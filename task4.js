// удаление элемента из массива delete
let arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
delete arr[arr.indexOf('fish')];
console.log(arr);
delete arr[arr.indexOf('cat')]
console.log(arr);

let arr2 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
delete arr2[arr2.length - 1];
delete arr2[arr2.length - 2];
console.log(arr2);

//второй способ splice

let arr3 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr3.splice(arr3.indexOf('fish'),1);
console.log(arr3);

arr3.splice(arr3.indexOf('cat'),1);
console.log(arr3);

let arr4 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];

arr4.splice(arr4.length - 2, 2);
console.log(arr4);
