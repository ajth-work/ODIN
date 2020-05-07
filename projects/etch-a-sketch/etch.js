const containerSize = 500;
const unitsWide = prompt("How many units wide?");
const unitsTall = prompt("How many units tall?");
const totalUnits = unitsWide * unitsTall;
const pixelWidth = containerSize / unitsWide;
const pixelHeight = containerSize / unitsTall;

alert(`Creating a grid made of ${Math.floor(totalUnits)} units that are each ${Math.floor(pixelWidth)} pixels wide by ${Math.floor(pixelHeight)} pixels tall.`);

// Making grid template text for columns
let widthStr = pixelWidth + "px ";
console.log(widthStr.length);

widthStr = widthStr.padEnd((widthStr.length) * unitsWide, widthStr)
alert(widthStr);

// Making grid template text for rows
let heightStr = pixelHeight + "px ";
console.log(heightStr.length);

heightStr = heightStr.padEnd((heightStr.length) * unitsTall, heightStr)
alert(heightStr);


container.style.cssText = `grid-template-columns: ${widthStr}; grid-template-rows: ${heightStr};`

console.log(container.style.cssText)

// Idea 1: create an array that is unitsWide in length with the designated pixelwidth for columns, apply the same method for height and rows.

/*
for (let i = 0; i < totalUnits; i++) {
const `div${i}` = document.createElement(`div${i}`);
document.body.container.appendChild(`div${i}`)
};
*/