// the JS file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello again World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello once more");
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function(e) {
    e.target.style.background = 'red';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        e.target.style.background = 'green';
        alert(button.id);
    });
});