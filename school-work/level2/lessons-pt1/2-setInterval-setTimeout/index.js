//setInterval
    //purpose: call a function on a repeated basis (ex: every1 sec)

//setInterval
    //purpose: call a function after a certain amount of time

    
//when used both setInterval and setTimeout retrun and ID
    //that ID can be given to clearInterval or clearTimeout to stop timers

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalId
timer.textContent = count

function incrementTimer(){
    count++
    timer.textContent = count
}

startBtn.addEventListener("click", function(){
    intervalId = setInterval(incrementTimer, 1000)
})

stopBtn.addEventListener("click", function(){
    clearInterval(intervalId)
})