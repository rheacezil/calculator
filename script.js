let num1;
let num2;
let operation;
let result;
let display = document.getElementById("display");

function clickHandler(input) {
    console.log(input);
    if (operation === undefined) {
        if (num1 === undefined) {
            num1 = input;
        } else {
            num1 = num1 + input;
        }
        updateDisplay(num1);
    } else {
        if (num2 === undefined) {
            num2 = input;
        } else {
            num2 = num2 + input;
        }
        updateDisplay(num2);
    }
}


function clickOperation(input) {
    console.log(input);
    switch (input) {
        case "+":
            operation = "+";
            break;
        case "-":
            operation = "-"
            break;
        case "X":
            operation = "X"
            break;
        case "÷":
            operation = "÷"
            break;
    }   
}

function calculate() {
    switch (operation) {
        case "+":
            result = Number(num1) + Number(num2);
            break;
        case "-":
            result = Number(num1) - Number(num2);
            break;
        case "X":
            result = Number(num1) * Number(num2);
            break;
        case "÷":
            result = Number(num1) / Number(num2);
        
    }
    updateDisplay(result);
    console.log(result);
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
}


function clearDisplay() {
    updateDisplay("0");
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
    result = undefined;
}

function changeSign() {
    if (operation === undefined) {
        num1 = Number(num1) * -1;
        updateDisplay(num1);
    } else {
        num2 = Number(num2) * -1;
        updateDisplay(num2);
    }
}

function switchToPercent() {
    if (operation === undefined) {
        num1 = num1 * 0.01;
        updateDisplay(num1);
    } else {
        num2 = num2 * 0.01;
        updateDisplay(num2);
    }
}

function updateDisplay(number) {
    display.innerHTML = number;
}