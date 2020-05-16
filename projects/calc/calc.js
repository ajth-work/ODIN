const display = document.getElementById("display");
const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert(button.id);
        display.textContent = `${button.textContent}`
    });
});
