//web storage
    //local storage - long term. saved after refreshes
    //session storage - short term. cleared with refreshes

// JSON - Javascript object notation 
    // way to save data when comunicating with servers
    // turn objects into giant strings, when recieved it can turn back into object

//setter - save data to local storage (key - value pairs)
    localStorage.setItem("name", "steve")
    localStorage.setItem("age", 10)
    localStorage.setItem("isAlive", true)
    localStorage.setItem("friends", JSON.stringify(["jay", "tina", "mark"]))
    localStorage.setItem("address", JSON.stringify({street: "123 street", city: "slc"}))


//getter - how to retrieve the data
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
const address = JSON.parse(localStorage.getItem('address'))
console.log(address)

//remove
    //localStorage.removeItem("age")

localStorage.dinosaur = "T-rex"
console.log(localStorage.dinosaur)
    // this method if not right gives undefined instead of null which is harder
    // to deal with. it is just better to use the other method because of this.