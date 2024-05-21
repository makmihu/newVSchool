const express = require("express")
const app = express()

//middleware (for every request)
app.use(express.json()) //looks for a request body, and turns it into 'req.body'

app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))



app.listen(9000, () => {
    console.log("the server is running on port 9000")
})