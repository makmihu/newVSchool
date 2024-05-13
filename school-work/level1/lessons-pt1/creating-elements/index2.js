var powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zach Taylor",
    "Trini Kwan", 
    "Billy Cranston",
]

var rangersList = document.getElementById("rangers")

//How to do it with .createElements and .appendd
    // my attempt (didn't work)
    // for (var i = 0; i < powerRangers.length; i++) {
    //     if(powerRangers[i] % 2 === 0){
    //         var newName = document.createElement("li")
    //         newName.textContent = powerRangers[i]
    //         rangersList.append(newName)
    //     }
    // }

    //how my instructor did it 
    // for (var i = 0; i < powerRangers.length; i++) {
    //     var newName = document.createElement("li")
    //     newName.textContent = powerRangers[i]
    //     rangersList.append(newName)
    // }


// how to do it with .innerHTML
    // for (var i = 0; i < powerRangers.length; i++) {
    //     rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
    // }