var form = document.getElementById("airline-form")
var submit = document.getElementById("submit")

function formAlert() {
    var firstName = form.elements["fName"].value
    var lastName = form.elements["lName"].value
    var age = form.elements["age"].value
    var gender = form.elements["gender"].value
    var location = form.elements["location"].value
    var diet = []
    if (form.elements["vegitarian"].checked) {
       diet.push("Vegitarian") 
    }
    if (form.elements["vegan"].checked) {
        diet.push("Vegan") 
    }
    if (form.elements["lactoce-free"].checked) {
        diet.push("Lactoce Free") 
    }
    if (form.elements["food-allergy"].checked) {
        diet.push("Food Allergy") 
    }

    alert("First Name: " + firstName + 
    "\nLast Name: " + lastName +
    "\nAge: " + age +
    "\nGender: " + gender +
    "\nLocation Traveling To: " + location +
    "\nDiet: " + diet)
} 

submit.addEventListener("click", formAlert)