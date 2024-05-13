//Before
const h1 = document.getElementById("clickable")
h1.addEventListener(
    "click", 
    function(e){
        h1.textContent = "clicked"
})

//After
const h1 = document.getElementById("clickable")
h1.addEventListener(
    "click", 
    () => {
        h1.textContent = "clicked"
})

//Before
const birds = ["robin", "pelican", "goose",]

const bigBirds = birds.map(function(bird){
    return "big " + bird
})

//After
const birds = ["robin", "pelican", "goose",]

const bigBirds = birds.map(bird => "big " + bird)
    //removed curlys and return because there was only one thing to return
    //called implicit return

//Before
function addTwo(first, second){
    return first + second
}

//After
const addTwo = (first, second) => first + second