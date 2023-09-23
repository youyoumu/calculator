function add(a, b)       {return a + b;};
function subtract(a, b)  {return a - b;};
function multiply(a, b)  {return a * b;};
function divide(a, b)    {return a / b;};
function power(a, b)     {return a ** b;};

let firstNumber = [];
let secondNumber = [];
let result;
let operator;
let operatorList = ["+", "−", "×", "÷", "^", "√"];

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {return add(firstNumber, secondNumber);};
    if (operator === "-") {return subtract(firstNumber, secondNumber);};
    if (operator === "*") {return multiply(firstNumber, secondNumber);};
    if (operator === "/") {return divide(firstNumber, secondNumber);};
};

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let button9 = document.querySelector('#button9');
let button0 = document.querySelector('#button0');
let buttonPeriod = document.querySelector('#buttonPeriod');
let delButton = document.querySelector('#delButton');
let clearButton = document.querySelector('#clear');
let sqrtButton = document.querySelector('#sqrt');
let powerButton = document.querySelector('#power');
let divideButton = document.querySelector('#divide');
let multipleButton = document.querySelector('#multiple');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let equalButton = document.querySelector('#equal');
let calcScreen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', runOnClick));

function runOnClick(e) {
    let buttonValue = parseInt(e.target.innerText);
    if (Number.isInteger(buttonValue) && operator != null){
        secondNumber.push(buttonValue);
        showOnDisplay(secondNumber);
    }
    else if (Number.isInteger(buttonValue)) {
        firstNumber.push(buttonValue);
        showOnDisplay(firstNumber);
    }
    else if (e.target.innerText === ".") {
        if (secondNumber.length != 0) {
            if (secondNumber.includes(".")) {return}
            else {
                secondNumber.push(".");
                showOnDisplay();
            };
        }
        else {
            if (firstNumber.includes(".")) {return;}
            else {
                firstNumber.push(".");
                showOnDisplay(firstNumber);
            };
        };
        
    }
    else if (operatorList.includes(e.target.innerText)) {
        if (e.target.innerText === "√") {
            if (secondNumber.length === 0 && operator === null) {
                result = Math.sqrt(parseFloat(firstNumber.join('')));
                showOnDisplay();
            }
            else {return};
        }
        else {
            operator = e.target.innerText;
            showOnDisplay(operator);
        }    
    }
    else if (e.target.innerText === "=") {
        if (secondNumber.length === 0) {return;}
        if (operator === "+") {
            result = add(parseFloat(firstNumber.join('')), parseFloat(secondNumber.join('')));
            showOnDisplay();
        }
        if (operator === "−") {
            result = subtract(parseFloat(firstNumber.join('')), parseFloat(secondNumber.join('')));
            showOnDisplay();
        }
        if (operator === "×") {
            result = multiply(parseFloat(firstNumber.join('')), parseFloat(secondNumber.join('')));
            showOnDisplay();
        }
        if (operator === "÷") {
            result = divide(parseFloat(firstNumber.join('')), parseFloat(secondNumber.join('')));
            showOnDisplay();
        }
        if (operator === "^") {
            result = power(parseFloat(firstNumber.join('')), parseFloat(secondNumber.join('')));
            showOnDisplay();
        }
    }
    else if (e.target.innerText === "AC") {
        firstNumber.length = 0;
        secondNumber.length = 0;
        operator = null;
        calcScreen.textContent = "";
    }
    else if (e.target.innerText === "⌫") {
        if (secondNumber.length != 0) {
            secondNumber.pop();
            showOnDisplay();
        }
        else {
            firstNumber.pop();
            showOnDisplay();
        }
    }
}

function showOnDisplay() {
    if (result != null) {
        firstNumber = result.toString().split("");
        calcScreen.textContent = firstNumber.join('');
        secondNumber.length = 0;
        operator = null;
        result = null;
    }
    else if (secondNumber.length != 0) {calcScreen.textContent = secondNumber.join('');}
    else if (operator != null) {calcScreen.textContent = operator;}
    else {calcScreen.textContent = firstNumber.join('');};
}
