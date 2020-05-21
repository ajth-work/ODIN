function reverseString(str) {
  let array = [];
  for (let i = 0; i <= str.length; i++) {
    array.push(str[str.length - i])
  }
  return array.join("")
}


console.log(reverseString('hello')) // should return 'olleh'
console.log(reverseString('hello there')) // should return 'ereht olleh'
console.log(reverseString('123! abc!')) // should return '!cba !321'