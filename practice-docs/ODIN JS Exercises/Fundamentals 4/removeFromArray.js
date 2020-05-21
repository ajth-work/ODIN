function removeFromArray(array, ...args) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (array[i] == args[j]) {
        delete array[i];
      }
    }
  }
  console.log("--------------")
  return array.flat();
}


console.log(removeFromArray([1, 2, 3, 4], 3)) // should return [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2)) // should return [1, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos")) // should return [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)) // should return [1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)) // should return []
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)) // should return [2, "ho"]