var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;
const fn = form.firstName

function formAlert() {
    var firstName = fn.value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push("vegan");
    } 
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    } 
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);