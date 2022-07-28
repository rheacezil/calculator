let result;
let num1;
let num2;
let operation;

function clickHandler(input) {
    console.log(input);
    if (operation === undefined) {
       num1 = input
    } else {
        num2 = input;
    }
}

function clickOperation(input) {
    operation = input;
}