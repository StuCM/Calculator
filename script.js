let firstNum = 0;
let secondNum = 0;
let operator = '';

function Operator(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            add(firstNum,secondNum);
            break;
        case '-':
            subtract(firstNum,secondNum);
            break;
        case '*':
            multiply(firstNum,secondNum);
            break;
        case '/':
            divide(firstNum,secondNum);
            break; 
    }
        

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log (add(4, 5))
console.log (subtract(4, 5))
console.log (multiply(4, 5))
console.log (divide(4, 5))