//slice
let arr = [1,2,3,4,5,6,7];
console.log(arr.slice(0,4));
console.log('\n');
//splice
let arr1 = [1,2,3,4,5,6,7];
arr1.splice(0,2,'first element', 'Second element');
console.log(arr1);
console.log('\n');

//map
let arr2 = [1,2,3,4,5,6,7,8];
let squares = arr2.map(function(item){
  return item * item;
})
console.log(squares);
console.log('\n');

//for 
let arr3 = [1,2,3,4,5,6,7,8];
for(let i = 0; i < arr3.length; i++){
  console.log(arr3[i]);
}
console.log('\n');
//forEach
let arr4 = [1,2,3,4,5,6,7,8];
arr4.forEach(function(item){
  console.log(item * 10);
})

//filter
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let twoUsers = users.filter(function(item){
  return item.id < 3;
})
console.log(twoUsers);
console.log('\n');

//sort
let noSortArr = [-15, 3, 40, 19];
noSortArr.sort(function(a, b){
  if (a > b){
    return 1;
  } else if (a == b){
    return 0;
  } else if (a < b){
    return -1;
  }
});
console.log(noSortArr);

console.log('\n');
// every/some
let array = [1, -1, 2, -2, 3];

let newArr = array.every(function(item){ //каждый должен быть больше 0, это не так поэтому возвращает false
  return item > 0;
})
console.log(newArr);

let newArr2 = array.some(function(item){ // хотя бы один элемент должен быть больше 0, это так возвращает true 
  return item > 0;
})
console.log(newArr2);