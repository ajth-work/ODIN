function leapYears(year) {
  if (year % 4 != 0) {
    return false;
  }
  else if (year % 100 != 0) {
    return true;
  }
  else if (year % 400 == 0) {
    return true;
  } else return false;
}

console.log("-------------------");
console.log(leapYears(1984)); // true
console.log(leapYears(2004)); // true
console.log(leapYears(1600)); // true
console.log(leapYears(2000)); // true
console.log("-------------------");
console.log(leapYears(1800)); // false
console.log(leapYears(1900)); // false
console.log("-------------------");
console.log(leapYears(1996)); // .toEqual(true);
console.log(leapYears(34992)); // .toEqual(true);
console.log(leapYears(1600)); // .toEqual(true);
console.log("-------------------");
console.log(leapYears(700)); // .toEqual(false);
console.log(leapYears(1997)); // .toEqual(false);
console.log(leapYears(1900)); // .toEqual(false);
