const readline = require("readline-sync")
//const name = readline.question("What is your name? ")

/*Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.
    **Game start:**
Tell the user their options:
    1. Find the key, or
    2. Put hand in hole
    3. Open the door
They can't open the door unless they find the key first. They die if they put their hand in the hole. */

// console.log("Ok you chose " + options[mainQuestion])
let haveKey = 0

for(var i = 0; i <= 10; i++){

    if(haveKey === 0){
        const options = ["Find the key. ", "Put hand in hole. ", "Open the door. ",]
        const question1 = readline.keyInSelect(options, "You are trapped in a room with the above options available. What do you want to do?"); 
        
            if(options[question1] === "Find the key. "){
                console.log("You found the key!")
                haveKey = 1
            } else if(options[question1] === "Put hand in hole. "){
                console.log("You died. Try again")
                i = 0
            } else if(options[question1] === "Open the door. "){
                console.log("The door is locked. You are still trapped. ")
                
            }
    } else if(haveKey === 1){
        const options2 =["Put hand in hole. ", "Open the door. "]
        const question2 = readline.keyInSelect(options2, "You found the key. What do you do now?")
        if(options2[question2] === "Put hand in hole. "){
            console.log("You died. Try again")
            i = 0
            haveKey = 0
        } else if(options2[question2] === "Open the door. "){
            console.log("You escaped! Congradulations! ")
            i = 10
        }

    } 
}