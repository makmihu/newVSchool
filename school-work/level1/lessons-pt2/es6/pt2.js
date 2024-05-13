//ES6 pt 2

// fat arrow functions
function sum(){

}
const sum2 = function(){

}

const sum2ES6 = (word) => {
    console.log(`ES6 is ${word}!`)
    return word
}

addEventListener("click", () => {

})

//object literals
    const blue = "blue" 
    const green = "green"
    const red = "red"

    const colors = { red, green, blue }
    
//object destructuring
    const user = {
        username: "joe123",
        age: 20,
        _id: "fsadfsdfweadfasdf",
    }

const { username, age } = user   
    //doing this pulls out the things so you can use them elsewhere
//      console.log(username)  // joe123  


const names = ["john", "betty", "nick"]

const [item1, item2, item3] = names
//    console.log(item2)  // betty

//default parameters
    function sum(a = 5, b = 10){
        return a + b
    }
        console.log(sum(7))     //17
        console.log(sum())      //15
        console.log(sum(8, 13))  //21