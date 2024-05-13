// .sort()
    //returns: the array sorted. mutates the original array (no need for return value)
    //purpose: to sort an unsorted array of items.

const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

//least to greatest
arr.sort((a, b) => a - b)

console.log(arr)