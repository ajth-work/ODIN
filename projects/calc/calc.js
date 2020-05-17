

// add
// subtract
// multiply
// divide
// operate
// display
function displayText() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let newStr = "";
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            switch (button.id) {
                case "button0":
                case "button1":
                case "button2":
                case "button3":
                case "button4":
                case "button5":
                case "button6":
                case "button7":
                case "button8":
                case "button9":
                    if(newStr.length <= 10) {
                        console.log(button.id)
                        newStr = newStr.concat(`${button.textContent}`);
                        console.log(newStr);
                    }
                    break;
                case "buttonClear":
                    newStr = newStr.slice(0, -1);
                    console.log(newStr);
                    break;
                case "buttonAllClear":
                    newStr = "";
            }
            display.textContent = newStr;
        });
    });
}
displayText();


// when you click the number buttons, you should be soring the display value in a variable for next step use
// store the numbers input when an operator is pressed
