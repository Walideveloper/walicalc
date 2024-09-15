// script.js
let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendOperation(operation) {
    if (currentInput && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += operation;
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = 'Error';
    }
}
