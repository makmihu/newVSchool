// Objects

// // key: value
// var person = {
//     name: "Rick",
//     age: 70,
//     friends: ["Morty", "Joe", "Sam", "Samantha"],
//     address: {
//         street: "123 street",
//         city: "Somewhere"
//     }
// }

// two notations for accessing an object's data

// Dot "." Notation
// console.log(person.name)
// console.log(person.age) 
// console.log(person.friends)
// console.log(person.address.street)

// //Bracket [] Notation
// console.log(person["name"])
// console.log(person["address"]["city"])

// // can mix and match
// console.log(person.address["street"])

// var brand = {
//     name: "Disney",
//     size: "Huge",
//     founding: 1923,
//     typesOfProducts: ["Movies","TV","Toys","Amusement Parks","Merch",""],
//     active: true,
//     childBrand1:{
//         name: "Marvel",
//         size: "Large",
//         founding: 1939,
//         bought: 2009,
//         active: true,
//     },
//     childBrand2:{
//         name:"Star Wars",
//         size: "large",

//     },
// }

// console.log(brand.founding)
// console.log(brand["size"])
// console.log(brand["childBrand1"].size)
// console.log(brand.childBrand2.name)
// console.log(brand["childBrand1"]["founding"])

// var car = {
//     type: "Honda",
//     make: "civic",
//     wheels: 4,
// }

//add keys - can be done with bracket and dot notation

// car.hasHadAccident = true

//Ojects can hold functions - Method

// var car = {
//     type: "Honda",
//     make: "civic",
//     wheels: 4,
//     honk: function(){
//         console.log("HOOOONK")
//     }
// }

// car.honk()

// "this"

// var car = {
//     type: "Honda",
//     make: "civic",
//     wheels: 4,
//     honkSound: "BLLEERRP",
//     honk: function(){
//         console.log(this.honkSound)
//     },
// }

// // How are objects referenced
//      // objects and arrays are passed by reference

// var otherCar = car 
// // doesn't make new object, just changes first one


// EXERCISE
var person = {
    name: "John",
    age: 28,
    catchPhrase: "I am John",
    meet: function(){
        console.log(this.catchPhrase)
    },
}

person.meet()
