ERSR_number_v1 = {
  '0': 572740, '1': 4506700, '2': 753051, '3': 353144, '4': 195655, '5': 880697, '6': 440939, '7': 549976,
  '8': 650593, '9': 418544
}

ERSR_number_v2 = {
  '0': 572740, '1': 450670, '2': 7538051, '3': 8978953144, '4': 195655, '5': 880697, '6': 440939, '7': 549976,
  '8': 650593, '9': 99999
}

let result = [];

function comparisonObjects(obj1, obj2) {
  if (JSON.stringify(ERSR_number_v1) === JSON.stringify(ERSR_number_v2)) {
    return 'равны'
  } else {
    for (keys in obj1) {
      if (obj1[keys] !== obj2[keys]) {
        result.push(`ключ: ${keys}: значение1: ${obj1[keys]} != значение2: ${obj2[keys]}`);
      }
    }
  }
  return result;
}

console.log (comparisonObjects(ERSR_number_v1,ERSR_number_v2));