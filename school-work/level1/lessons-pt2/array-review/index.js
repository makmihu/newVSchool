var numbers = [42, 13, 34, 18, 123];
var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"];
var users = [
    {
        name: "Joe Schmoe",
        age: 42,
        gender: "Male",
    },
    {
        name: "jill Schmoe",
        age: 41,
        gender: "Female",
    },
    {
        name: "Jimmy Schmoe",
        age: 9,
        gender: "Male",
    }
]
var disparateArr = ["Alice", 40, true, [8, 10, 12]]

/**
 * QUIZ:
 * 
 * 1. What i the purpose of arrays? Why do programmers care about them?
 *      arrays are a way to group things, usually of the same type, so  
 *      like a group of strings or numbers.
 *          collect multiple things in one variable
 * 
 * 2. What are some differences between arrays and objects?
 *      objects are a bit more complex. they can be within arrays,
 *      and are used to group multiple types of date around one thing.
 *          used to give one thing in lots of detail
 * 
 * 3. How would you access the number 34 from the 'numbers' array above? (see if you can log it to the console)
 *      console.log(numbers[2])
 * 
 * 4. What is the length of the 'turtles" array? How would you access the length?
 *      The length is 4, which can be easily counted. 
 *          console.log(numbers.length)
 * 
 * 5. Is it synatically correct to have and array like 'disparateArr'?  
 *      Yes for javascript, but it would be better to structure it
 *      differently because it has more then one data type.
 * 
 * 
 * 6 What might be a better data structure to use for 'disparateArr'?
 *      It would be better to have it as an object.
 * 
 * 7. How would you log Jill Schmoe's name to the console using the 'users' array?
 *      console.log(users[1].name)
 * 
 */