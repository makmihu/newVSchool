// function getAgeRange(person){
//     if(person.age < 18){
//         let ageRange = "Child"
//     } else if(person.age >= 18 && person.age < 80){
//         let ageRange = "Adult"
//     } else {
//         let ageRange = "Elderly Person"
//     }
//     return ageRange
// }


// Why is angeRange not defined?
    // nowhere in the function do we define the initial value of ageRange

// How can we fix this function with var?
    // function getAgeRange(person){
    //     if(person.age < 18){
    //         var ageRange = "Child"
    //     } else if(person.age >= 18 && person.age < 80){
    //         var ageRange = "Adult"
    //     } else {
    //         var ageRange = "Elderly Person"
    //     }
    //     return ageRange
    // }

// How can we fix this function avoiding the use of var?
    // function getAgeRange(person){
    //     let ageRange 
    //     if(person.age < 18){
    //         ageRange = "Child"
    //     } else if(person.age >= 18 && person.age < 80){
    //         ageRange = "Adult"
    //     } else {
    //         ageRange = "Elderly Person"
    //     }
    //     return ageRange
    // }

// Why would you use const vs let?
    //use let so you can redefine it later in the function

// What would the above function potentialy look like if we destructured the
//    person perameter?
    function getAgeRange({age}){
        let ageRange 
        if(age < 18){
            ageRange = "Child"
        } else if(age >= 18 && age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }
        return ageRange
    }
    const person = { name: "Andrea", age: 27}

//Why can we and .ageRange to person when we use const to define person
    person.ageRange = getAgeRange(person) 
    //objects are mutable, so it's recommended to use const on immutable things
        //AKA - you can change arrays or objects, so for things you don't
        //      want changing set them as a const

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]

const fringeMonths = [...springMonths, ...fallMonths]