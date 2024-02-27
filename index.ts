// console.log('this the calculator ');
import { question } from "readline-sync";
type operator= '+'| '-'|'*'|'/';
function main(): void
{
    console.log('this is the main: ',question);
    const firstStr: string = question('enter the first number:\n');
    const operator: string = question('enter the operator:\n');
    const secondStr: string= question('enter the second number\n');
const validInput:boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
// console.log(validInput);   
const firstNum = isOperator(operator)
//     console.log(firstNum);
if(validInput){
    const firstNum: number = parseInt(firstStr)
    const secondNum: number = parseInt(secondStr)
    const result = calculate(firstNum, operator as operator, secondNum);
    console.log(result)
}
    else{
        console.log('\n invalid input ');
        // main()
    }

}
function calculate(firstNum: number, operator: operator, secondNum: number){
    switch(operator){
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/":
            return firstNum / secondNum
    }
}
function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum)
    return isNum;
}
function isOperator(operator: string): boolean
{
switch(operator){
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