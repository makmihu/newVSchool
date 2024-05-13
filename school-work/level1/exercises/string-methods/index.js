/**1.
 * Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
 * capilizeAndLowercase("HelLo") // => "HELLOhello"
 */
var string = "HElLo"
function capilizeAndLowercase(string){
    var stringCap = string.toUpperCase()
    var stringLow = string.toLowerCase()
    var output = stringCap.concat(stringLow)
    console.log(output) 
    return output
}
capilizeAndLowercase(string)

/**2.
 * Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
 * > Hint: You'll need to use Math.floor().
 * findMiddleIndex("Hello") // => 2
 * findMiddleIndex("Hello World") // => 5
 */



/**3.
 *Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` and the other functions you've written to return the first half of the given string. 
 * returnFirstHalf("Hello") // => "He"
 * returnFirstHalf("Hello World") // => "Hello"
 */



/**4.
 * Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
 * Hint: If your string length is odd, use Math.floor() to round down.
 * capilizeAndLowercase("Hello") // => "HEllo"
 * capilizeAndLowercase("Hello World") // => "HELLO world"
 */