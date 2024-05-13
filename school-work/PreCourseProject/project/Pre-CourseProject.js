var diceBag = {
    price: "$10",
    yarnColors: ["red", "blue", "green", "pink", "white", "grey", "gold"],
    yarnWeight: 4,
    colors: 2,
    difficulty: "easy"
}

console.log(diceBag.yarnWeight)
//should log 4

var yarnColors = ["red", "blue", "green", "pink", "white", "grey", "gold"]

console.log(yarnColors[3])
//should log "pink"

if(diceBag.difficulty === "easy"){
    console.log("It's easy!")
    } else if(diceBag.difficulty === "medium"){
        console.log("It's medium!")
    } else {
        console.log("It's hard!")
    }
//should log "It's easy!"


for(var i = 0; i < diceBag.yarnColors.length; i++){
    console.log(diceBag.yarnColors[i])
}
//should log each color individually and not repeat

var diceBagsButton = document.getElementById("dice-bags-button")

diceBagsButton.addEventListener("click", function(){
    console.log("the dice bag button was clicked!")
})