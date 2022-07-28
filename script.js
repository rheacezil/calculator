let num1;
let num2;
let operation;
let result;

function clickHandler(input) {
    console.log(input);
    if (operation === undefined) {
        if (num1 === undefined) {
            num1 = input;
        } else {
            num1 = num1 + input;
        }
    } else {
        if (num2 === undefined) {
            num2 = input;
        } else {
            num2 = num2 + input;
        }
    }
}

function specialSymbol(input) {
    console.log(input);
    switch (input) {
        case "C":
            num1 = undefined;
            num2 = undefined;
            operation = undefined;
            result = undefined;
            break;
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
        case "=":
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
            console.log(result);
            num1 = undefined;
            num2 = undefined;
            operation = undefined;
            break;
    }
    
}