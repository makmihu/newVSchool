//Immutable - cannot be changed from what they are
    //string
    //numbers
    //booleans

    var n1 = "steve"
    n1[0] ="f"
    console.log(n1) // "steve"
        // you can't change steve into fteve

//Mutable - containers
    //array
    //object

    var arr = [1, 2, 3, 4, 5]
    arr[0] = 6
    console.log(arr) // [6, 2, 3, 4, 5]

    var person = {
        name: "harry",
        age: 12
    }

    person.hasWand = true   //adds this to object
    delete person.hasWand   //removes from object

    var newPerson = person // not two different people, only one box


//typeof - retruns the type of the data immediately to its right
    console.log( typeof person ) // object
    console.log( typeof 10 ) // number
    console.log( typeof "rick" ) // string
        // will say arrays are objects