//style property
    // var header = document.querySelector("#header")
    // console.log(Object.keys(header.style))
    // header.style.color = "blue"

// you can substitute color for other css options (changed to camel casing)
    //fontSize
    //backgroundColor
    //display
    //textAlign
    //margin, padding, border etc

//my attempt (it worked)
    // var body = document.querySelector('body')
    // body.style.backgroundColor = "black"

//how my instructor did it
    // document.body.style.backgroundColor = "black"


//className
    // var className = document.querySelector("#header").className

    // document.querySelector("#header").className += "new-class"
    //this is hard to edit so classList is more helpful

//classList
    document.querySelector("#header").classList.add("new-class")
        //add class name
    document.querySelector("#header").classList.remove("title")
        //remove class name
    document.querySelector("#header").classList.toggle("another")
        //add if not there, remove if is there