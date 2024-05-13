function filterAnagrams(arr, target) {
    const targetSorted = target.split("").sort().join("")
    const arrFiltered = arr.filter( word => word.split("").sort().join("") === targetSorted ) 
    return arrFiltered
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']