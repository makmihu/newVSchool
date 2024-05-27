//Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.

function extractUniqueCharacters(strings) {
//   const stringsSplit = strings.map(word => word.split('')).flat(1) //.sort()  
//   return stringsSplit.filter((value, index) => stringsSplit.indexOf(value) === index) 

const allChars = strings.join("")
const uniqueArr = []
allChars.split("").map(char => {
    if (!uniqueArr.includes(char)){
        uniqueArr.push(char)
    }
})
return uniqueArr
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']