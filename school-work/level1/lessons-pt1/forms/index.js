const form = document["my-form"]

//submit event
form.addEventListener( "submit", (event) => { 
    event.preventDefault()
        
    const fName = form.firstName.value
    const lName = form.lastName.value  
    form.firstName.value = ""
    form.lastName.value = ""

    console.log(fName + " " + lName)

    //how to add to the page
    //1 <h1></h1>
    const h1 = document.createElement('h1')
    //2 <h1>First Last</h1>
    h1.textContent = fName + " " + lName
    //3 Append (0 for first element)
    document.getElementsByTagName("body")[0].append(h1)

})