//Promises
    //for handling asynchronous code (two or more things at the same time)
    // js constructor:  newPromise()
    // promises are eager  - evaluate as soon as defined

    //3 states of promises
        //1) <Pending> -            //then it goes to either
            //2) Resolved - .then()    //or
            //3) Rejected - .catch()

    //thenable - able to do something after it comes back
function flipCoin(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)
        if(randomNum === 0){
            resolve("HEADS")
        } else if(randomNum === 1){
            reject("TAILS")
        }
    })
}

// flipCoin()
//     .then(response => console.log(`Resolved: ${response}`))
//     .catch(error => console.log(`Rejected: ${error}`))

// Promise.resolve("Something").then(response => console.log(response))

function getData(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve("HELLO WORLD"), 3000)
    })
}

getData()
    .then(res => console.log(res))
    .catch(err => console.log(err))