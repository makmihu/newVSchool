// ### Filter Object Array by Property:

// Write a function called **filterByProperty** that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.

function filterByProperty(objects, propertyName, propertyValue) {
  return objects.filter(n => n[propertyName] === propertyValue)
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);