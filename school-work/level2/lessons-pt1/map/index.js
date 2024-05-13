// Higher order array methods
// .map()
    //returns: new array the same size as the input array
    //purpose: allows you to take and array of data and create a new array of data from it.


const arr = [1, 2, 3, 4, 5, 6, 7, 8]


//ES5
const result1 = arr.map(function(num){  //num stands for arr[i]
    return num + 10
})


//ES6
const result2 = arr.map(num => num + 10)


// console.log(result)


const users = [
    {name: "joe"},
    {name: "steve"},
    {name: "lisa"},
];

const result = users.map(user => user.name)

console.log(result)