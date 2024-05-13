//1) given an array of numers. return a new array that has only the numbers that are 5 or greater
    function fiveAndGreaterOnly(arr) {
        return arr.filter(num => num >= 5)
    }
    
    // console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
    

//2) given an array of numbers, return a new array that only includes the even numbers.
    function evensOnly(arr) {
        return arr.filter(num => num % 2 === 0)
    }

    // console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
 
//3) given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
    function fiveCharactersOrFewerOnly(arr) {
        return arr.filter(word => word.length < 5)
    }
    
    // console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
 
//4) given an array of people objects, return a new array that has filter out all those who don't belong to the club
    function peopleWhoBelongToTheIlluminati(arr){
        return arr.filter(status => status.member === true)
    }

    // console.log(peopleWhoBelongToTheIlluminati([
    //     { name: "Angelina Jolie", member: true },
    //     { name: "Eric Jones", member: false },
    //     { name: "Paris Hilton", member: true },
    //     { name: "Kayne West", member: false },
    //     { name: "Bob Ziroll", member: true }
    // ]));
    // // =>
    // //[ { name: 'Angelina Jolie', member: true },
    // //  { name: 'Paris Hilton', member: true },
    // //  { name: 'Bob Ziroll', member: true } ]
    
//5) make a filtered list of all the peope who are old enout to see the matrix

    function ofAge(arr){
        return arr.filter(old => old.age >= 18)
    }
    
    console.log(ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ]));
    // =>
    //[ { name: 'Angelina Jolie', age: 80 },
    //  { name: 'Bob Ziroll', age: 100 } ]