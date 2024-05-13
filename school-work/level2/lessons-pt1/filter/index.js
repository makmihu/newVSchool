// .filter()
    //returns: a new array with only the filtered out items from the original array
    //purpose: reducing a data set into a sub-data set.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = arr.filter(function(num){
    if(num % 2 ===0){
        return true
    }
})
const result2 = arr.filter(num => num % 2 === 0)

// console.log(result2)


const movies = [
    {name: "movie1", genre: "horror"},
    {name: "movie2", genre: "action"},
    {name: "movie3", genre: "action"},
    {name: "movie4", genre: "fantasy"},
]


const actionMovies = movies.filter(movie => movie.genre === "action")
console.log(actionMovies)