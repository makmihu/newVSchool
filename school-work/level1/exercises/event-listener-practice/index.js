const square = document.getElementById("square")

// hover, blue
square.addEventListener(
    "mouseover", 
    () => {
        square.style.backgroundColor = "blue"
})

// helddown, red
square.addEventListener(
    "mousedown", 
    () => {
        square.style.backgroundColor = "red"
    })

// letgo, yellow
square.addEventListener(
    "click",
    () => {
        square.style.backgroundColor = "yellow"
})

// doubleclick, green
square.addEventListener(
    "dblclick", 
    () => {
        square.style.backgroundColor = "green"
    })

// scroll, orange
document.addEventListener(
    "wheel", 
    () => {
        square.style.backgroundColor = "orange"
    })

// first letter of the colors to change color
document.addEventListener(
    "keypress", 
    (e) => {
        var keycode = e.key;
        if (keycode === "b" || keycode === "B"){
            square.style.backgroundColor = "blue"
        } else if (keycode === "r" || keycode === "R") {
            square.style.backgroundColor = "red"
        } else if (keycode === "y" || keycode === "Y") {
            square.style.backgroundColor = "yellow"
        } else if (keycode === "g" || keycode === "G") {
            square.style.backgroundColor = "green"
        } else if (keycode === "o" || keycode === "O") {
            square.style.backgroundColor = "orange"
        }
    })