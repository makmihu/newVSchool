var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2];
var petsArr = ["cat", "dog", "bird", "snake", "rabbit"];
var users = [
    {
        name: "joe",
        age: 30,
    },
    {
        name: "steve",
        age: 39,
    },
    {
        name: "sarah",
        age: "39",
    },
    {
        name: "lisa",
        age: "27",
    },
];

/**
 * QUIZ:
 * 
 * 1. What part of the for loop will allow you to access each individual item in an array?
 *      for(var i = 0;)
 * 
 * 2. what part of the for loop will need the array's length in order to run the correct amount of iterations?
 *      for(var i = 0, i < array.length)
 * 
 * 3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be (cats, dogs, birds, snakes, rabbits)
 *      for(var i = 0, i < petsArr.length, i++){
 *          console.log(petsArr[i] + "s")
 *      }
 * 
 * 4. Using the numbers array, how would you write a for loop to console log only the odd numbers?
 *      for(var i = 0, i < numbersArr.length, i++){
 *          if(numbersArr[i] % 3 === 0){
 *              console.log(numbersArr[i])
 *          }
 *      }
 * 
 * 5. Using the users array, how would you write a for loop that would console log the following sentience for each user in the array? ("Hi, I am joe and I am 30 years old")
 *      for(var i = 0, i < users.length, i++){
 *          console.log("Hi, I am " + users[i].name + " and I am " + 
 *          users[i].age + " years old")
 *      }
 * 
 * 6. Using the pets array, how would you write a for loop that would console.log all the pets in reverse order?
 *      for(var i = petsArr.length - 1, i >= 0, i--){
 *          console.log(petsArr[i])
 *      }
 * 
 */