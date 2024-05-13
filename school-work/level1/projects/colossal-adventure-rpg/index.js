const readline = require("readline-sync");
let health = 10;
let damage = 8;
let pack = [];
let dead = false
const playerName = readline.question("Welcome to the Colossal Adventure RPG! \nWhat is your name? ");
console.log(`\nHello ${playerName}! You will need to make it through the forest to win. \nYou start with 50hp. Good luck!`);
function Charactor(name, hp, attack, inventory, death) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.inventory = inventory;
    this.death = death;
    this.openPack = function(){
        console.log(`Player: ${this.name}`);
        console.log(`Health: ${this.hp}`);
        console.log(`Attack: ${this.attack}`);
        console.log(`Inventory: ${this.inventory}`);
    };
}
const user = new Charactor(playerName, health, damage, pack, "none");
const enemy1 = new Charactor("Bat", 3, 5, ["wing"], "SCREEECH");
const enemy2 = new Charactor("Wolf", 12, 10, ["fang"], "AAWOOOH");
const enemy3 = new Charactor("Bear", 25, 15, ["fur pelt"], "RROOOAAARR");
let enemies = [enemy1, enemy2, enemy3];

let traveled = 1;
let distance = 30;
let i = 0;
while( i <= 100 ){
    if(user.hp <= 0){
        dead = true
        console.log(`Although you escaped, you died from your injuries. You lose.`)
    }
    if(dead === true){
        i = 101
    } 
    const walk = readline.question(`\nYou are ${distance} steps from the other end of the forest. What would you like to do? \nPress 'w' to walk forward. Press 'p' to open your pack. `);

    if( traveled === 30 ){
        console.log(`\nCongratulations ${playerName}! You made it the forest without dying! You win the game!`);
        i = 100;
    }

    if( walk === "w" || walk === "W" ){
        traveled++
        distance--
        let fight = Math.floor(Math.random() * 3);
        if( fight === 0 & traveled <= 30 ){
            let enemyGen = Math.floor(Math.random() * 12);
            
            if( enemyGen === 0 || enemyGen === 1){
                console.log(`\nA wild ${enemy3.name} has appeared in front of you!`);
                let j = enemy3.hp;
                let enemyHealth = enemy3.hp;
                while(j > 0){
                    console.log(`\nWhat would you like to do?`);
                    const fight = readline.question(" \nPress 'a' to attack. Press 'p' to open your pack. Press 'r' to try to run! ");
                    if(user.hp <= 0){
                        j = 0
                        dead = true
                        console.log(`you were defeated by the ${enemy3.name}. You have lost.`)
                    }else if(fight === "a" || fight === "A"){
                        console.log(`\nYou attack dealing ${user.attack} damage to the ${enemy3.name}.`)
                        j = j - user.attack;
                        enemyHealth = enemyHealth - user.attack;
                        if( enemyHealth <= 0 ){
                            console.log(enemy3.death);
                        }else{
                            console.log(`\nThe ${enemy3.name} attacks back! It deals ${enemy3.attack} points of damage to you.`)
                            user.hp = user.hp - enemy3.attack;
                        }
                        console.log(user.hp)
                    }else if(fight === "r" || fight === "R"){
                        console.log(`\nYou try to get away, but the ${enemy3.name} still makes an attack! You take ${enemy3.attack} points of damage.`);
                        user.hp = user.hp - enemy3.attack;
                        let esc = Math.floor(Math.random() * 2);
                        if(esc === 0){
                            j = 0;
                        }else {
                            console.log(`You were unable to escape!`);
                        }
                    }else if(fight === "p" || fight === "P" ){
                        user.openPack();
                    }else {
                        console.log("\nInvalid Input");
                    }   
                }
                if(j <= 0 & enemyHealth > 0){
                    console.log(`You were able to escape the ${enemy3.name} and can now continue on your journey.`);
                }
                if(enemyHealth <= 0){
                    console.log(`\nCongradulations you defeated the ${enemy3.name}! You have gained ${enemy3.inventory}.`);
                    pack.push(enemy3.inventory);
                }
            } else if( enemyGen === 2 || enemyGen === 3 || enemyGen === 4 || enemyGen === 5 ){
                console.log(`\nA wild ${enemy2.name} has appeared in front of you!`);
                let j = enemy2.hp;
                let enemyHealth = enemy2.hp;
                while( j > 0 ){
                    console.log(`\nWhat would you like to do?`);
                    const fight = readline.question(" \nPress 'a' to attack. Press 'p' to open your pack. Press 'r' to try to run! ");
                    if(user.hp <= 0){
                        j = 0
                        dead = true
                        console.log(`you were defeated by the ${enemy2.name}. You have lost.`)
                    }else if( fight === "a" || fight === "A" ){
                        console.log(`\nYou attack dealing ${user.attack} damage to the ${enemy2.name}.`);
                        j = j - user.attack;
                        enemyHealth = enemyHealth - user.attack;
                        if( enemyHealth <= 0 ){
                            console.log(enemy2.death);
                        }else{
                            console.log(`\nThe ${enemy2.name} attacks back! It deals ${enemy2.attack} points of damage to you.`);
                            user.hp = user.hp - enemy2.attack;
                        }
                        console.log(user.hp)
                    }else if( fight === "r" || fight === "R" ){
                        console.log(`\nYou try to get away, but the ${enemy2.name} still makes an attack! You take ${enemy2.attack} points of damage.`);
                        user.hp = user.hp - enemy2.attack;
                        let esc = Math.floor(Math.random() * 2);
                        if( esc === 0 ){
                            j = 0;
                        }else {
                            console.log(`You were unable to escape!`);
                        }
                    }else if( fight === "p" || fight === "P" ){
                        user.openPack();
                    }else {
                        console.log("\nInvalid Input");
                    }   
                }
                if( j <= 0 & enemyHealth > 0 ){
                    console.log(`You were able to escape the ${enemy2.name} and can now continue on your journey.`);
                }
                if( enemyHealth <= 0 ){
                    console.log(`\nCongradulations you defeated the ${enemy2.name}! You have gained ${enemy2.inventory}.`);
                    pack.push(enemy2.inventory);
                }
            } else {
                console.log(`\nA wild ${enemy1.name} has appeared in front of you!`);
                let j = enemy1.hp;
                let enemyHealth = enemy1.hp;
                while( j > 0 ){
                    console.log(`\nWhat would you like to do?`);
                    const fight = readline.question(" \nPress 'a' to attack. Press 'p' to open your pack. Press 'r' to try to run! ");
                    if(user.hp <= 0){
                        j = 0
                        dead = true
                        console.log(`you were defeated by the ${enemy1.name}. You have lost.`)
                    }else if( fight === "a" || fight === "A" ){
                        console.log(`\nYou attack dealing ${user.attack} damage to the ${enemy1.name}.`);
                        j = j - user.attack;
                        enemyHealth = enemyHealth - user.attack;
                        if( enemyHealth <= 0 ){
                            console.log(enemy1.death);
                        }else{
                            console.log(`\nThe ${enemy1.name} attacks back! It deals ${enemy1.attack} points of damage to you.`);
                            user.hp = user.hp - enemy1.attack;
                        }
                        console.log(user.hp)
                    }else if( fight === "r" || fight === "R" ){
                        console.log(`\nYou try to get away, but the ${enemy1.name} still makes an attack! You take ${enemy1.attack} points of damage.`);
                        user.hp = user.hp - enemy1.attack;
                        let esc = Math.floor(Math.random() * 2);
                        if( esc === 0 ){
                            j = 0;
                        }else {
                            console.log(`You were unable to escape!`);
                        }
                    }else if( fight === "p" || fight === "P" ){
                        user.openPack();
                    }else {
                        console.log("\nInvalid Input");
                    }   
                }
                if( j <= 0 & enemyHealth > 0 ){
                    console.log(`You were able to escape the ${enemy1.name} and can now continue on your journey.`);
                }
                if( enemyHealth <= 0 ){
                    console.log(`\nCongradulations you defeated the ${enemy1.name}! You have gained ${enemy1.inventory}.`);
                    pack.push(enemy1.inventory);
                }
            }
        }
    } else if( walk === "p" || walk === "P" ){
        user.openPack();
    } else {
        console.log("\nInvalid Input");
    }
    i++;
    
}


   