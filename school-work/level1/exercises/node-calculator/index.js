const readline = require('readline-sync');
const n1 = readline.question("please enter your first number ")
const n2 = readline.question("Please enter your second number ")
const oper = readline.question('please enter the operation to perform: add, sub, mul, div: ')


function add(num1, num2){
    return +num1 + +num2
}  

function sub(num1, num2){
    return num1 - num2
}

function mul(num1, num2){
    return num1 * num2
}

function div(num1, num2){
    return num1 / num2
}
if (oper === 'add') {
    console.log("The result is: ",add(n1, n2))     
} else if (oper === 'sub'){
    console.log("The result is: ",sub(n1, n2))
} else if (oper === 'mul'){
    console.log("The result is: ",mul(n1, n2))
} else if (oper === 'div'){
    console.log("The result is: ",div(n1, n2))
} else {
    console.log('undefined operation')
}

