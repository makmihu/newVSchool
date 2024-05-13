/*
Code Challenges
    Challenge 1: Sort Array with Preserved Index for -1 Values

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.
*/
function solution(arr){
    // return arr.map( num => {
    //     let n
    //     if(num === -1){
    //         n = arr.indexOf(num)
    //         console.log(n)
    //     } else {
    //         console.log("positive")
    //     }
    // })
    let posArr = arr.filter(num => num >= 0).sort()
    console.log(posArr)
    let j = -1

    return arr.map((num) =>{
        if(num === -1){
            return num
        } else {
            j = j + 1
            return posArr[j]
        }
    })
}

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))     // ?????? why doesnt this one work?

/*
Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution.
*/

function countVowels(string){
    // let vowels = 0
    // let letters = string.split("")
    // // console.log(letters)
    // letters.map(letter => {
    //     if( letter => letter === "a" || letter === 'A' || letter === 'e' || letter === 'E' || letter === 'i' || letter === 'I' || letter === 'o' || letter === 'O' || letter === 'u' || letter === 'U'  ){
    //         vowels = vowels + 1
    //     } 
    // })

    let splitString = string.split("")
    let vowels = splitString.filter( letter => letter === "a" || letter === 'A' || letter === 'e' || letter === 'E' || letter === 'i' || letter === 'I' || letter === 'o' || letter === 'O' || letter === 'u' || letter === 'U' )
    return vowels.length
}

// console.log(countVowels('Hello, World!')); // Output: 3
// console.log(countVowels('Counting Vowels')); // Output: 5

const sumOfTwo = (numbers, target) => {
let result = []
numbers.map( num => {
    numbers.map( num2 => {
        if(num + num2 === target){
            result.push(num, num2)
        }
    })
})
return result.slice(2)

//nested loop
//checking sum to see if it is target
//return array of the first numbers to match

}

console.log(sumOfTwo([2,6,4,11,15], 9 )) // [2,7]
console.log(sumOfTwo([5,12,3,9,1], 8 ))  // [3,5]