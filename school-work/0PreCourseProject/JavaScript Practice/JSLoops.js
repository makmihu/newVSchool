//Javascript Loops

// console.log(1)
// console.log(2)
// console.log(3)

// for(var i = 0; i < 100; i++){
//     console.log(i)
// }

//operators 
    //++ :increment
    //-- :decrement
    //%  :modulo

// for(var i = 0; i < 10; i++){
//     console.log("I'm an getting good at for loops")
// }

// for(var l = 0; l < 10; l += 2){
//     console.log(l)
// }

// var favFoods = ["pizza", "pasta", "ice cream", "banana"]

// console.log(favFoods[0])
// console.log(favFoods[1])
// console.log(favFoods[2])
// console.log(favFoods[3])

// for(var i = 0; i < favFoods.length; i++){
//     console.log (favFoods[i])
// }

var numbers = [1, 2, 3, 4, 5, 6]

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

var count = 0

while(count < 10){
    console.log('hi')
    count++
}