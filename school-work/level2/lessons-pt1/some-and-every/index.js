/**
 * .some()
 *      returns: true if at least one item in an array matches your criteria
 *      purpose: ee if something exists in an array
 * 
 * .every()
 *      returns: true if every item in an array matches your criteria
 *      purpose: to see if everything in an array matches your criteria
 */

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// .some()
    const result1 = names.some(name => name[0] === "S")

    // console.log(result1)  // true

    
// .every()
    const result2 = names.every(name => name[0] === "J")

    // console.log(result2)  // false