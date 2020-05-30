function operate(param1) {
  console.log(param1)
  param1 = eval(param1)
 return param1

}

// add
// subtract
// multiply
// divide
// operate
// display

function play() {
    const audio = document.getElementById("tink");
    audio.play();
}

function displayText() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let newStr = "";
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            switch (button.id) {
                case "buttonDot":
                    play();
                    console.log(button.id)
                    if (newStr.indexOf(".") == -1) {
                        newStr = newStr.concat(`${button.textContent}`);
                    }
                    break;
                case "buttonClear":
                    play();
                    console.log(button.id)
                    newStr = newStr.slice(0, -1);
                    console.log(newStr);
                    break;
                case "buttonAllClear":
                    play();
                    newStr = "";
                    console.log(newStr)
                    break;
                case "buttonPlus":
                    play();
                    if (((button.textContent == "+") && (newStr[newStr.length-1] == "+" )) ||
                    ((button.textContent == "+") && (newStr[newStr.length-1] == "−")) ||
                    ((button.textContent == "+") && (newStr[newStr.length-1] == "÷")) ||
                    ((button.textContent == "+") && (newStr[newStr.length-1] == "×"))) {
                        newStr = newStr.substring(0, newStr.length - 1)
                    }
                    newStr = newStr.concat(`${button.textContent}`);
                    break;
                case "buttonMinus":
                    play();
                    if (((button.textContent == "−") && (newStr[newStr.length-1] == "−" )) ||
                    ((button.textContent == "−") && (newStr[newStr.length-1] == "+")) ||
                    ((button.textContent == "−") && (newStr[newStr.length-1] == "÷")) ||
                    ((button.textContent == "−") && (newStr[newStr.length-1] == "×"))) {
                        newStr = newStr.substring(0, newStr.length - 1)
                    }
                    newStr = newStr.concat(`${button.textContent}`);
                    break;
                case "buttonDivide":
                    play();
                    if (((button.textContent == "÷") && (newStr[newStr.length-1] == "÷")) ||
                    ((button.textContent == "÷") && (newStr[newStr.length-1] == "−")) ||
                    ((button.textContent == "÷") && (newStr[newStr.length-1] == "+")) ||
                    ((button.textContent == "÷") && (newStr[newStr.length-1] == "×"))) {
                        newStr = newStr.substring(0, newStr.length - 1)
                    }
                    newStr = newStr.concat(`${button.textContent}`);
                    break;
                case "buttonMultiply":
                    play();
                    if (((button.textContent == "×") && (newStr[newStr.length-1] == "×")) ||
                    ((button.textContent == "×") && (newStr[newStr.length-1] == "−")) ||
                    ((button.textContent == "×") && (newStr[newStr.length-1] == "+")) ||
                    ((button.textContent == "×") && (newStr[newStr.length-1] == "÷"))) {
                        newStr = newStr.substring(0, newStr.length - 1)
                    }
                    newStr = newStr.concat(`${button.textContent}`);
                    break;
                case "buttonEquals":
                    play();
                    newStr = operate(newStr);
                    break;
                default:
                    play();
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


// when you click the number buttons, you should be storing the display value in a variable for next step use
// store the numbers input when an operator is pressed
