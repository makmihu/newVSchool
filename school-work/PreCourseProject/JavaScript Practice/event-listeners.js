// Object.keys(window).forEach(key => {
//     if(/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         })
//     }
// } )
//this allows you to console.log every event happening on the page

var button = document.getElementById("button")


button.addEventListener("click", function(){
    console.log("the button was clicked!")
})
// option 1

function handleButtonClick(){
    console.log("the buttion was clicked") 
}
button.addEventListener("click", handleButtonClick)
// option 2

button.removeEventListener("click", handleButtonClick)