//1) Make an array of numbers that are doubles of the first array

    function doubleNumbers(arr){
       return arr.map(nums => nums * 2)
    }

    console.log(doubleNumbers([2, 5, 100]))


//2) Take an array of numbers and make them strings

    function stringItUp(arr){
        return arr.map(nums => nums.toString())
    }

    // console.log(stringItUp([2, 5, 100]))

//3) Capitalize the first letter of each name and make the rest of the characters lowercase

    function capitalizeNames(arr){
        let adjust = arr.map(function(letters){
            return letters.charAt(0).toUpperCase() + letters.substring(1).toLowerCase()
        })
       return adjust 
     }
  
    // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
    // Output:
    // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4) Make an array of strings of the names

    function namesOnly(arr){
        return arr.map(n => n.name)
    }
    
    //   console.log(namesOnly([
    //       {
    //           name: "Angelina Jolie",
    //           age: 80
    //       },
    //       {
    //           name: "Eric Jones",
    //           age: 2
    //       },
    //       {
    //           name: "Paris Hilton",
    //           age: 5
    //       },
    //       {
    //           name: "Kayne West",
    //           age: 16
    //       },
    //       {
    //           name: "Bob Ziroll",
    //           age: 100
    //       }
    //   ]));
    // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
    

//5) Make an array of strings of the names saying whether or not they can go to the Matrix

    function namesOnly(arr){
        let ageCheck = arr.map(function(a){
            if(a.age >= 18){
                console.log(`${a.name} can go to The Matrix`)
            } else {
                console.log(`${a.name} is under age!!`)
            }
        })
        return ageCheck
    }
    
    //   console.log(namesOnly([
    //       {
    //           name: "Angelina Jolie",
    //           age: 80
    //       },
    //       {
    //           name: "Eric Jones",
    //           age: 2
    //       },
    //       {
    //           name: "Paris Hilton",
    //           age: 5
    //       },
    //       {
    //           name: "Kayne West",
    //           age: 16
    //       },
    //       {
    //           name: "Bob Ziroll",
    //           age: 100
    //       }
    //   ]));
        
    // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
    
    
//6) Make an array of the names in <h1>'s, and the ages in <h2>'s

    function readyToPutInTheDOM(arr){
        return arr.map(s => s = "<h1>" + s.name + "</h1>" + "<h2>" + s.age + "</h2>"
            // const h1 = document.createElement(h1)
            // h1.textContent = s.name
            // const h2 = document.createElement(h2)
            // h2.textContent = s.age
            )
    }
    // console.log(readyToPutInTheDOM([
    //     {
    //         name: "Angelina Jolie",
    //         age: 80
    //     },
    //     {
    //         name: "Eric Jones",
    //         age: 2
    //     },
    //     {
    //         name: "Paris Hilton",
    //         age: 5
    //     },
    //     {
    //         name: "Kayne West",
    //         age: 16
    //     },
    //     {
    //         name: "Bob Ziroll",
    //         age: 100
    //     }
    // ]));
    // ["<h1>Angelina Jolie</h1><h2>80</h2>",
    // "<h1>Eric Jones</h1><h2>2</h2>",
    // "<h1>Paris Hilton</h1><h2>5</h2>",
    // "<h1>Kayne West</h1><h2>16</h2>",
    // "<h1>Bob Ziroll</h1><h2>100</h2>"]