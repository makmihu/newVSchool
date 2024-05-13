const form = document["my-form"]

//submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("It's working")
    const fName = form.firstName.value
    const lName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""
    console.log(fName, lName)
})