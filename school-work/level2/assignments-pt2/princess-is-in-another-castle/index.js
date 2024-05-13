class player {
    constructor(totalCoins, hasStar, status = "Big",) {
        this.name = "";
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    };
    setName() {
        const randomNum1 = Math.random()
        if (randomNum1 < .5) {
            this.name = "Mario";
        } else {
            this.name = "Luigi";
        }
    };
    gotHit() {
        if(this.hasStar === true){
            this.hasStar = false
            console.log("You were hit by an enemy, but your star protected you!")
        } else if(this.status === "Powered Up"){
            this.status = "Big"
            console.log("You were hit by an enemy!")
        } else if(this.status === "Big"){
            this.status = "Small"
            console.log("You were hit by an enemy!")
        } else{     //for status === "Small"
            this.status = "Dead"
            console.log("You were hit by an enemy!")
        }
    };
    gotPowerup() {  
        if(this.status === "Powered Up"){
            this.hasStar = true
            console.log(`You gained a star!`)
        } else if(this.status === "Big"){
            this.status === "Powered Up"
            console.log(`You just found a powerup!`)
        } else {   //for status === "Small"
            this.status = "Big"
            console.log(`You just found a powerup!`)
        }
    };
    addCoin() {
        this.totalCoins = this.totalCoins + 1
    };
    print() {
        console.log(`\nName:${this.name} \nStatus:${this.status} \nTotal Coins: ${this.totalCoins}`);
        if (this.hasStar === true) {
            console.log(`You have a star`);
        };
    };
}
const player1 = new player(0, false)

player1.setName()
player1.print()

function gameLoop(){
    const randomNum2 = Math.floor(Math.random() * 3)
    if(randomNum2 === 0){
        player1.gotHit()
    } else if(randomNum2 === 1){
        player1.gotPowerup()
    } else {    //for randomNum2 === 2
        player1.addCoin()
    }
    player1.print()
}
let timer
function runGame(){
    timer = setInterval(function(){
        if(player1.status === "Dead"){
            console.log(`Oh no! ${player1.name} has died.`)
            clearInterval(timer)
        } else {
            gameLoop()
        }
    }, 3000)
}
runGame()