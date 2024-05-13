// Color controls

var purpleBtn = document.getElementById("purple")
var greenBtn = document.getElementById("green")
var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")
var whiteBtn = document.getElementById("white")

purpleBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "rebeccapurple"
})

greenBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "forestgreen"
})

blueBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue"
})

redBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "firebrick"
})

whiteBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
})

//Count controls
var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function(){
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function(){
    count++
    document.getElementById("counter").innerText = count;
})


//what does interacting with Dom in JavaScript do?
    // lets us control elements on the page (add them, get rid of them, change them)

//why would we need to use JS to manipulate Dom when we could put it into the HTML
    // we are unable to predict how the user will use the site
    // its the only way we can react to a users interaction with our page.


//What is DOM? 
    //Document Object Model

    