var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

var newInput = input.split("").map(letter => { 
    if ( isNaN(letter) ){
        if( letter === " " ){
            return letter
        } else {
            var codeShifted = letter.charCodeAt(0) + shift // (a = 97   z = 122)
            if( codeShifted > 122 ){
                return String.fromCharCode((codeShifted - 122) + 96)
            }
            return String.fromCharCode(codeShifted)
        }
    }
    return letter
}).join("")

console.log(newInput)