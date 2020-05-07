const containerSize = 500;
const units = prompt("How many units tall/wide?");
//const units = 5; //test value
const totalUnits = units * units;
const pixel = containerSize / totalUnits;
let pixelAreas = [];

console.log(`Creating a grid made of ${Math.floor(totalUnits)} units that are each ${Math.floor(pixel)} pixels wide and tall.`);

// Making grid template text for columns and rows
let pixelStr = pixel + "px ";
console.log(pixelStr.length);
pixelStr = pixelStr.padEnd((pixelStr.length) * units, pixelStr);
console.log(pixelStr);

// Making grid template areas 
function prepAreas(num) {
    for (let i = 1; i <= num; i++) {
            pixelAreas = pixelAreas.concat(`div${i}`);
        }
    return pixelAreas
};
const prepAreasArray = prepAreas(totalUnits);

function chunky(arr, size) {
    let arrCopy = [...arr];
    let newArray = [];
    for (let i = 0; i < arrCopy.length / size; i++) {
        let arr2 = arrCopy.splice(0, size);
        while (arr2.length == size) {
            newArray.push(arr2)
            arr2 = arrCopy.splice(0, size);
        }
        let remainder = arr2.splice(0);
        if (remainder != "") {
            newArray.push(remainder)
            return newArray;
        } else { 
            return newArray
        }
    }
}
pixelAreas = chunky(prepAreasArray, units);
console.log(pixelAreas);

// Modifiying the CSS according to the variables for grid template columns, rows, and areas
container.style.cssText = `grid-template-columns: ${pixelStr}; grid-template-rows: ${pixelStr};`
container.style.cssText = `grid-template-areas: ${pixelAreas};`;
console.log(container.style.cssText)

// Idea 1: create an array that is unitsWide in length with the designated pixelwidth for columns, apply the same method for height and rows.

/*
for (let i = 0; i < totalUnits; i++) {
const `div${i}` = document.createElement(`div${i}`);
document.body.container.appendChild(`div${i}`)
};
*/