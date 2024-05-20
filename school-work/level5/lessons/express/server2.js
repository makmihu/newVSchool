const express = require("express")
const app = express()

//Fake Data
const users = [
    { name: 'joe', age: 20 },
    { name: 'moe', age: 24 },
    { name: 'betty', age: 20 },
    { name: 'sarah', age: 20 },
    { name: 'mike', age: 20 }
];

app.get("/users", (req, res) => {
    res.send(users)
})

//request on browser or postman
    // localhost:8000/users

app.listen(8000, () =>{
    console.log("the server is running on port 8000")
})

