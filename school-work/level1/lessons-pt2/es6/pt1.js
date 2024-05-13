// ES6 part 1

// const and let - better alternative to var
    //const - constant = shouldn't reassign
const firstName = "joe"
    //firstName = "steve"   --- this would show an error
let age = 12
    // age = 13          --- this would not


//Global, Local, Bracket
    // global means it exists everywhere
        //this would be for variables outside of functions
        
    // local would be exists only in a function
        /* you would name the var in the function and it would only 
          exist within the function */

    //only exists within brackets
        /*if you defined a var in a function within a function then it 
          would only exist within the inner functions brackets, not in 
          any other part of the external function or any part of the
          rest of the page */


//spread and rest
    // Syntax:  ...

    //rest (gather)
//gather any amount of data without having to write out (num1, num2, num3, etc), and puts it into an array with name of what you put after the 3 dots        
        function maxNumber(...nums){ 
            // console.log(nums)
        }
        maxNumber(0, 3, 58, 20, 200, 30)

    //spread (anywhere else there are 3 dots)
        //objects and arrays
    const colors1 = ["red", "blue"]
    const colors2 = ["yellow", "green"]

    const allColors = [...colors1, ...colors2]

const person = {
    name: "rick",
    age: 50,
}
const personCopy = {...person}
    //this creates a new object, not just references the first one


//template literals
    const n1 = "joe"
    //before
    "hi " + n1
    //after
    const greeting = `hi ${n1}`
        // this is using the back ticks 


//import & export
    //require()
    //module.exports
