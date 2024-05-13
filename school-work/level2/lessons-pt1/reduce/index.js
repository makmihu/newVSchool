// .reduce()    
    // returns: whatever you want it to
    // purpose: take an array of data and reduce it into a completely different 
    //        or smaller array

//1. reduce the array of numbers indo a sum of all the numbers
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

    const result1 = nums.reduce(function(final, num){
        final += num
        return final
    }, 0)

    // console.log(result1)

//2. reduce the users to an array of strings of the user's first and last names
    const users = [
        {fName: "joe", lName: "smithy"},
        {fName: "tina", lName: "johnson"},
        {fName: "rick", lName: "sanchez"},
    ]

    const result2 = users.reduce(function(final, user){
        final.push(user.fName + "" + user.lName)
        return final
    }, [])

    // console.log(result2)

//3. reduce the array into a count of how many people voted
    const voters = [
        {name: "steve", voted: true},
        {name: "janet", voted: true},
        {name: "rebecca", voted: false},
        {name: "harvey", voted: true},
    ]

    // const voteCount = voters.reduce(function(final, voter){
    //     if(voter.voted){
    //         final++
    //     }
    //     return final
    // }, 0)

    // console.log(voteCount)

//4. return an object that has a count of both who voted and who didn't vote
    // { didVote: 3, didn'tVote: 1 }

    const voterObj = voters.reduce(function(final, voter){
        if(voter.voted){
            final.didVote++
        } else {
            final.didntVote++
        }
        return final
    }, {didVote: 0, didntVote: 0})

    // console.log(voterObj)