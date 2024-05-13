//unit testing

function sum(num1, num2){
    return num1 + num2
}
const actual = sum(10, 10)
const expected = 20

if(actual !== expected){
    console.log(`TEST FAILED: Expected ${expected}, but recieved ${actual}.`)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`)
}