var textField = document.getElementById("textBox")
var output = document.getElementById("output")

document.getElementById("button").addEventListener(
    "click",
    () => {
    console.log(textField.value);
    output.innerHTML = textField.value;
})