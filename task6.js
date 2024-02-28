//Вывод свойств и значений объекта

const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',
}

console.log(person);
console.log('\n');

for (let key in person){
  if (key === 'firstName'){
    console.log(`First name: ${person[key]}`);
  } else if(key === 'lastName'){
    console.log(`Last name: ${person[key]}`);
  } else if(key === 'age'){
    console.log(`Age: ${person[key]}`);
  } else if(key === 'location'){
    console.log(`Where to find: ${person[key]}`);
  }
}