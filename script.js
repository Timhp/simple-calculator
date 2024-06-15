
let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function clearDisplay() {
    display.value = '0';
    currentOperation = null;
    firstOperand = null;
}

function operate(operation) {
    if (firstOperand === null) {
        firstOperand = parseFloat(display.value);
    } else if (currentOperation) {
        firstOperand = calculate(firstOperand, parseFloat(display.value), currentOperation);
    }
    currentOperation = operation;
    display.value = '0';
}

function calculateResult() {
    if (currentOperation && firstOperand !== null) {
        display.value = calculate(firstOperand, parseFloat(display.value), currentOperation);
        currentOperation = null;
        firstOperand = null;
    }
}

function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
