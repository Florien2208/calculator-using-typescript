"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('this the calculator ');
var readline_sync_1 = require("readline-sync");
function main() {
    console.log('this is the main: ', readline_sync_1.question);
    var firstStr = (0, readline_sync_1.question)('enter the first number:\n');
    var operator = (0, readline_sync_1.question)('enter the operator:\n');
    var secondStr = (0, readline_sync_1.question)('enter the second number\n');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);   
    var firstNum = isOperator(operator);
    //     console.log(firstNum);
    if (validInput) {
        var firstNum_1 = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum_1, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input ');
        // main()
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
main();
