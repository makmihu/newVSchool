//Methods are Functions
//String Methods are pre-built by Javascript, so all you have to do is use them!

var n1 = "luke"
//toUpperCase and toLowerCase
    var uppercasedLuke = n1.toUpperCase() // "LUKE"
    var lowercasedLuke = uppercasedLuke.toLowerCase // "luke"

//concat
    var s = "s"
    var newName = n1.concat(s) // "lukes"

//split - turn a string into an array
    var animal = "tiger"
    var characterArr = animal.split("") // "t" "i" "g" "e" "r" 
    var animal2 = "tigergerger"
    var charArr2 = animal2.split("g") // "ti" "er" "er" "er"

//slice - cut up a string
    var phoneNumer = "6764567890" // what we want is "676-456-7890"
    var first3 = phoneNumer.slice(0, 3) // "676" 
        // - cuts up to but not including second number
    var next3 = phoneNumer.slice(3, 6) // "456"
    var last4 = phoneNumer.slice(6) // "7890"
        //dont need second number it will stop at end
    var phoneNumWithDash = first3 + "-" + next3 + "-" + last4
        //"676-456-7890"

//indexOf - tell us where something is
    var city = "New York City"
    var indexOfC = city.indexOf("C") // 10
        //finds first match
    var indexOfExclamation = city.indexOf("!")// -1
        //this means it doesn't have a match