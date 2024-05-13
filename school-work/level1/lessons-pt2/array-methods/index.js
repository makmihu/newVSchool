var arrOfFoods = ["pancakes", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array
    //arrOfFoods.push("cereal") 
    //add cereal to end of the array

//pop - removes item from end of the array
    //arrOfFoods.pop()
    //removes last item, we don't even have to tell it what item

//unshift - adds item(s) to the begining of the array
    //arrOfFoods.unshift("cereal")
    //add cereal to the 0 position in the array

//shift - removes item from the beginning of the array
    //arrOfFoods.shift()
    //remove whatever is in the 0 position of the array

//concat
    var colors1 = ["blue", "green"]
    var colors2 = ["purple", "red"]
    var newArr = colors1.concat(colors2)
        // newArray = ["blue", "green", "purple", "red",]

//indexOf
    var pizzaIndex = arrOfFoods.indexOf("pizza")
    // console.log(pizzaIndex)  -- 3

//slice
    var newArray = arrOfFoods.slice(1, 3)
    // this leaves old array alone while making a new array with part of it

//join
    var name1 = "steve"
    var splitName = name1.split("") // -- "s" "t" "e" "v" "e"
    var joinedName = splitName.join("") // -- steve

//reverse
    //long way
    var name2 = "rick" 
    var splitName2 = name2.split("") // "r" "i" "c" "k"
    var reversedArr2 = splitName.reverse() // "k" "c" "i" "r"
    var reversedName2 = reversedArr2.join("") // "kcir"

    //short way
    var allAtOnce = name2.split("").reverse().join("")


//splice - change the original array
var arrOfFoods2 = ["pancakes", "egg", "ice cream", "pizza", "hamburger", "cereal"] 
    arrOfFoods2.splice(2, 2, "bacon", "shake") 
        //first number is were to start
        //second number is how many items to cut
        //all following arguments are what we would add
    //console.log(result) -- ["pancakes", "egg", "bacon", "shake",  
    //                "hamburger", "cereal"]
