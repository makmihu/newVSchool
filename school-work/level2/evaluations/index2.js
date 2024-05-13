//Given the following code below, write a function that uses  .map()  to wrap each string/name in the array in an <h1> opening and closing tag.

const people = [ "John", "Adam", "Amber" ]
function peopleElements(arr) {
    
    return arr.map( (e) => {return`<h1>${e}</h1>`})

}

console.log(peopleElements(people))
//Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]