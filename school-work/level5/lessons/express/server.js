const express = require("express")
const app = express()

// endpoint and callback function
    //req = request
    //res = response
app.get("/", (req, res) => {
    res.send("Hello World")
})


// port and callback function 
app.listen(9000, () =>{
    console.log("the server is running on port 9000")
})