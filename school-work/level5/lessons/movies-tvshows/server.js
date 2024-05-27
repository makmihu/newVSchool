const express = require("express")
const app = express()
const morgan = require('morgan')

//middleware (for every request)
app.use(express.json()) //looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console

//Routes
app.use("/api/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen
app.listen(7000, () => {
    console.log("the server is running on port 7000")
})