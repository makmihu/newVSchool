

// function Book(title, author, year){
//     this.title = title
//     this.author = author
//     this.year = year
//     this.getDetails = function(){
//         return `Title: ${this.title} \nAuthor: ${this.author} \nYear: ${this.year}`
//     }
// }

// const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960


// function myFunc(name){
//     let usersName
//     usersName = name + ' is there name'
//     return usersName
// }



// console.log(myFunc('Jordan'))

// function largestNumber(...nums){
// // largestNumber in array
// let numArray = [...nums]
// // sort array
// numArray.sort((a, b) => b - a)
// //take first value in the array
// return numArray[0]
// }

// function largestNumber(...nums){
//     return Math.max(...nums)

//     // let maxVal = num1
//     // if(maxVal < num2){
//     //     maxVal = num2
//     // }
//     // if(maxVal < num3){
//     //     maxVal = num3
//     // }

//     // return maxVal
// }

// console.log(largestNumber(3,8,9,6,15))
// console.log(largestNumber(25,-10,10))

const names = [ "Jerry", "Adam" ]
const person = { firstName: 'Robert', lastName: 'Jones', age: 37 }
names.push(person.firstName)
console.log(names)