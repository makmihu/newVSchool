// Conditionals
// Boolean - true / false

if(false){
     console.log("IT is true!") 
} else {
    console.log("It is false!")
}

if(2 === 4){
    console.log("TWO IS EQUAL TO TWO")
} else {
    console.log("TWO IS NOT EQUAL TO FOUR")
}

if(2=== 4){
    console.log("TWO IS EQUAL TO FOUR")
} else if(2 === 5){
    console.log("TWO IS EQUAL TO FIVE")
} else if (2 === 2) {
    console.log("TWO IS EQUAL TO TWO")
}

// Comparison Operator 
   // >   greater than
   // <   less than
   // <=  less then or equal to
   // >=  greater than or equal to
   // ==  loosely equal (don't use for now)
   // === strictly equal
   // !=  loosely not equal (don't use for now)
   // !== strictly not equal

if("2" == 2){
    console.log("they are equal")
}

// Truthy and Falsey
    // Falsey
       // 0
       // ""
       // null
       // undefined
       // false
       // NaN
    //Truthy
       // everything else


// Logic Operators
   // && - and
   // || - or
   // !  - not

if(2 === 2 && 2 === 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// needs both to be true to run true

if(2 === 2 || 2 === 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// only needs one to be true to run true

if(2 === 2 && 2 !== 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}

// Order of operations + - * /
    // you can use parenthasis to tell it to check something first

if((2 === 2 && 3 === 3) && 2 !== 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}

// Switch Statement

var color = "blue"

switch(color){
    case "red":
        console.log("the color is red")
    case "blue":
        console.log("the color is blue")
    case "yellow":
        console.log("the color is yellow")
}

switch(color){
    case "red":
        console.log("the color is red")
        break
    case "blue":
        console.log("the color is blue")
        break
    case "yellow":
        console.log("the color is yellow")
        break
}

var color2 = "green"

switch(color2){
    case "red":
        console.log("the color is red")
        break
    case "blue":
        console.log("the color is blue")
        break
    case "yellow":
        console.log("the color is yellow")
        break
    default:
        console.log("the color is not red, blue, or yellow")
}
