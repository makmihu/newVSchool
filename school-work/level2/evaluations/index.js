// function sortNumbers(numbers) {
//     numbers.sort((a, b) => a - b)
//     return numbers
//     }

// // Example usage:
// // const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);
// // console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]


// function convertToUppercase(strings) {
//        return strings.map(s => s.toUpperCase())
//     }

// // Example usage:
// const strings = ['hello', 'world', 'javascript'];
// const uppercaseStrings = convertToUppercase(strings);
// // console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']




// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0)
}

console.log(filterEvenNumbers(numbers));  // Output: [2, 4, 6]