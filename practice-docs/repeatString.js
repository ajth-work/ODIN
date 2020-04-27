function repeatString(str, num) {
  let array = [];
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      array.push(str);
    }
    return array.join("");
  }
}

console.log(repeatString('hey', 3)) // returns 'heyheyhey'
console.log(repeatString('hey', 10)) // returns 'heyheyheyheyheyheyheyheyheyhey'
console.log(repeatString('hey', 1)) // returns 'hey'
console.log(repeatString('hey', 0)) // returns ''
console.log(repeatString('hey', -1)) // returns 'ERROR'