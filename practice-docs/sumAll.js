function sumAll(num1, num2) {
  let sum = 0;
  if ((num1 || num2) < 0) { 
    return "ERROR";
  }
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  console.log("--------------")
  return sum;
}


console.log(sumAll(1, 4)) // .toEqual(10)
console.log(sumAll(1, 4000)) // .toEqual(8002000);
console.log(sumAll(123, 1)) // .toEqual(7626);
console.log(sumAll(-10, 4)) // .toEqual('ERROR');
console.log(sumAll(10, "90")) // .toEqual('ERROR');
console.log(sumAll(10, [90, 1])) // .toEqual('ERROR');
