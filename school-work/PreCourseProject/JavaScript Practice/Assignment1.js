// IF STATEMENT OLYMPICS

//PRELIMINARIES

if(5 > 3){
    console.log("is greater than")
}


var name = "cat"

if(name.length === 3){
    console.log("is the length")
}

var name = "dog"

if("cat" === "dog"){
    console.log("is the same")
} else {
    console.log("not the same")
}

//BRONZE MEDAL

var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18) {
    console.log("<theNameOfThePersonInObject> is allowed to go to the movie")
} else {
    console.log("<theNameOfThePersonInObject> is not allowed to go to the movie")
}

if(person.name[0] === "B") {
    console.log("<theNameOfThePersonInObject> is allowed to go to the movie")
} else {
    console.log("<theNameOfThePersonInObject> is not allowed to go to the movie")
}

if(person.age >= 18 && person.name[0] === "B") {
    console.log("<theNameOfThePersonInObject> is allowed to go to the movie")
} else {
    console.log("<theNameOfThePersonInObject> is not allowed to go to the movie")
}

//SILVER MEDAL

if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose"||"abstract")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
}

//GOLD MEDAL
var animal = "dog"

if(typeof animal == "string"){
    console.log("yes")
} else {
    console.log("no")
}
 
var tf = "true"

if(typeof tf == "boolean") {
    console.log("yes")
} else {
    console.log("no")  
}

var letter = "s"
var num = 12

if(letter > num) {
    console.log("yes")
} else {
    console.log("no")
}

