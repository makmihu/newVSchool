//Green Circle
//1) --------------------------------------------------------------------------
    //use the rest operator to help this function return an array of animals, no matter how many animals are passed to it: 

    function collectAnimals(...animals) {
        return animals
    }
    
    // console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
        // ["dog", "cat", "mouse", "jackolope", "platypus"]


//2)  --------------------------------------------------------------------------

                //?????????????????????????????????????

    //Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

    function combineFruit(fruit, sweets, vegetables){
        return {
           fruit, 
           sweets,
           vegetables,
        }
    }
    
    // console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))
    //=> 
    // {
    //      fruit: ["apple", "pear"],
    //      sweets: ["cake", "pie"],
    //      vegetables: ["carrot"]
    // }


//3)  --------------------------------------------------------------------------
    //Use destructuring to use the property names as variables. Destructure the object in the parameter:

    function parseSentence(location, duration){
        return `We're going to have a good time in ${location} for ${duration}`
    }
      
    // console.log(parseSentence("Burly Idaho", "2 weeks"))

//4)  --------------------------------------------------------------------------
    //Use array destructuring to make this code ES6:
    const arr = [1, 3, 5, 7, 9]
    function returnFirst(items){
        const [firstItem] = items 
        return firstItem
    }
    // console.log(returnFirst(arr))
    
//5)  --------------------------------------------------------------------------
    //Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

    function returnFavorites(arr){
        const [firstFav, secondFav, thirdFav] = arr
        return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
    }

    // console.log(returnFavorites(favoriteActivities))


//Blue Square
//1) --------------------------------------------------------------------------
    //Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

    function combineAnimals(...arr) {
        let newAnimals = [].concat(...arr)
        return newAnimals
    }
    
    const realAnimals = ["dog", "cat", "mouse"];
    const magicalAnimals = ["jackolope"];
    const mysteriousAnimals = ["platypus"];
    
    // console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))
    
        // ["dog", "cat", "mouse", "jackolope", "platypus"]
    

//Black Diamond
//1) --------------------------------------------------------------------------
    //Try to make the following function more ES6y:

    function product(...letters) {
        let numbers = [...letters];
      
        return numbers.reduce((acc, number) => acc * number, 1)
      }
      

//2)  --------------------------------------------------------------------------
    //Make the following function more ES6y. Use at least both the rest and spread operators:

    function unshift(array, ...letters) {
        return [...letters].concat(array);
      }
      

//3)  --------------------------------------------------------------------------
    //Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

    // function populatePeople(names){
    //     return names.map(function(name){
    //         name = name.split(" ")
    //         let firstName = name[0]
    //         let lastName = name[1]
    //         return {
    //             firstName: firstName,
    //             lastName: lastName
    //         }
    //     })
    // }

    populatePeople = (names => 
        names.map(name => {
            name = name.split(" ")
            let firstName = name[0], lastName = name[1]
            return {
                firstName,
                lastName
            }
        })
    )
    
    console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  
      // [
        //  {firstName: "Frank", lastName: "Peterson"},
        //  {firstName: "Suzy", lastName: "Degual"},
        //  {firstName: "Liza", lastName: "Jones"},
        // ]