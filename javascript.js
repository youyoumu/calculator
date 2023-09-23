function add(a, b)       {return a + b;};
function subtract(a, b)  {return a - b;};
function multiply(a, b)  {return a * b;};
function divide(a, b)    {return a / b;};

let firstNumber = [];
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    if(operator === "+") {return add(firstNumber, secondNumber);};
    if(operator === "-") {return subtract(firstNumber, secondNumber);};
    if(operator === "*") {return multiply(firstNumber, secondNumber);};
    if(operator === "/") {return divide(firstNumber, secondNumber);};
};

let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let button4 = document.querySelector('#button4')
let button5 = document.querySelector('#button5')
let button6 = document.querySelector('#button6')
let button7 = document.querySelector('#button7')
let button8 = document.querySelector('#button8')
let button9 = document.querySelector('#button9')
let button0 = document.querySelector('#button0')
let buttonPeriod = document.querySelector('#buttonPeriod')
let delButton = document.querySelector('#delButton')
let clearButton = document.querySelector('#clear')
let sqrtButton = document.querySelector('#sqrt')
let powerButton = document.querySelector('#power')
let divideButton = document.querySelector('#divide')
let multipleButton = document.querySelector('#multiple')
let addButton = document.querySelector('#add')
let subtractButton = document.querySelector('#subtract')
let equalButton = document.querySelector('#equal')
let calcScreen = document.querySelector('#screen')
let buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', runOnClick));

function runOnClick(e) {
    let buttonValue = parseInt(e.target.innerText);
    if(Number.isInteger(buttonValue)) {
        firstNumber.push(buttonValue);
        console.log(firstNumber);
        showOnDisplay(firstNumber)
    }
}

function showOnDisplay(text) {
    calcScreen.textContent = text.join('')
}
