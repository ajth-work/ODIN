

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
                case "buttonDot":
                    console.log(button.id)
                    if (newStr.indexOf(".") == -1) {
                        newStr = newStr.concat(`${button.textContent}`);
                    }
                    break;
                case "buttonClear":
                    console.log(button.id)
                    newStr = newStr.slice(0, -1);
                    console.log(newStr);
                    break;
                case "buttonAllClear":
                    newStr = "";
                    console.log(newStr)
                    break;
                default:
                    console.log(button.id)
                    if (newStr.length >= 9) {
                        display.style.wordWrap = "break-word";
                        if (newStr.length >= 20) {
                            break;
                        }
                    }
                    newStr = newStr.concat(`${button.textContent}`);
                    console.log(newStr);
                    break;
            }
            display.textContent = newStr;
        });
    });
}
displayText();


// when you click the number buttons, you should be soring the display value in a variable for next step use
// store the numbers input when an operator is pressed
