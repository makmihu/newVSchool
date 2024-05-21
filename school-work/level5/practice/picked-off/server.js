const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')


const joe = { name: 'joe', age: 20 }

app.use(express.json())

app.use("/joe", (req, res, next) => {
    req.body = {...joe, _id: uuidv4()}
    next()
})

app.get("/joe", (req, res, next) => {
    res.send(req.body)
    
})


app.listen(8000, () =>{
    console.log("the server is running on port 8000")
})

