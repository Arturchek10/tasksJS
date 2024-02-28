//замена символов в стоке с помощью replace
let str = 'Я изучаю JavaScipt';

const newStr1 = str.replace('ю','л');
console.log(newStr1);

const newStr2 = str.replace('JavaScipt', 'Frontend')
console.log(newStr2);

// второй способ split join

let secondStr = 'Я изучаю JavaScript';
let changeStr = secondStr.split('JavaScript').join('Frontend');
console.log(changeStr);