// ### Extract Initials:

// Write a function called **extractInitials** that takes an array of full names and returns a new array containing only the initials of each name.


function extractInitials(names) {
  return names.map(name => {
    const splitname = name.split(' ')
    return splitname.map(n => n.slice(0, 1)).join('')
})
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']