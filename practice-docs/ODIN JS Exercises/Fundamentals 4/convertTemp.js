let answer;

function ftoc(num){
answer = ((num - 32) * (5/9))
return `${num} F converts to ${answer.toFixed(1)} C`;

}
function ctof(num){
answer = ((num * (9/5)) + 32);
return `${num} C converts to ${answer.toFixed(1)} F`;
}


console.log(ftoc(32)) // .toEqual(0);
console.log(ftoc(100)) // .toEqual(37.8);
console.log(ftoc(-100)) // .toEqual(-73.3);
console.log(ctof(0)) // .toEqual(32);
console.log(ctof(73.2)) // .toEqual(163.8);
console.log(ctof(-10)) // .toEqual(14);

// Referred to https://www.w3schools.com/jsref/jsref_tofixed.asp for setting preferred amount of decimal places.