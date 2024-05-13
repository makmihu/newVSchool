// .forEach 
    // returns: undefined
    // purpose: used in place of a for-loop
        //caveat: for-loops allow you to customize where the loop starts,
        //      stops, and increments by.
        //      forEach will always loop the entire length of the array

// .find()
    //returns: the first item in an array that matches the criteria
    //purpose: finding items in an array

const arr = [1, 2, 3, 4, 5, 6, 7,]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" },
]

const newArr = []

// .forEach
    arr.forEach(num => num % 2 === 0 && newArr.push(num))

    // console.log(newArr)  // [2, 4, 6, 8]


// .find()
    const result = users.find(function(user) {
        if(user.name[0] === "julie"){
            return result
        }})

    // console.log(result)

// .findIndex
    const userIndex = users.findIndex(function(user){
        if(user.name === "rick"){
            return true
        }
    })

    // console.log(userIndex)