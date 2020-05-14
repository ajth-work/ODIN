function makeGrid() { 

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

const count = prompt("How many?");
const cellPixelCount = ((500-(2*count))/count);
console.log("cellPixelCount is roughly", Math.floor(cellPixelCount), "px.");


for(let i = 1; i <= count*count; i++){
	let cell = document.createElement("div");
	cell.setAttribute("id", "cell-" + i);
	cell.setAttribute("class", "cell")

	cell.setAttribute("style", 
	`
	height: ${cellPixelCount}px; 
	width: ${cellPixelCount}px; 
	`
	);
	container.appendChild(cell);
};
};

makeGrid();

function colorize() {
	const colorCells = document.querySelectorAll(".cell");
	colorCells.forEach((colorCell) => {
		colorCell.addEventListener("mouseover", (e) => {
		e.target.style.background = "crimson";
	})
	})
};

colorize();