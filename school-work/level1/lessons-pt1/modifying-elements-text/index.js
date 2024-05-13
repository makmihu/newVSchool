// innerHTML - security risk
// innerText - "expensive" aka slow
// textContent - best option

// var person = {name: "joe"}
// person.name = "jim"
// console.log(person)
//this changes the name in the console from joe to jim

// var p = document.querySelector("p")
// var h1 = document.querySelector("h1").textContent
// p.textContent = h1

//how instructor did it
var text = document.querySelector("#header").textContent
document.querySelector('#paragraph').textContent = text