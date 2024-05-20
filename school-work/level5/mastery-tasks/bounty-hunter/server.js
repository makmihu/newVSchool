const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

app.use("/bounty", require("./routes/bountiesRouter"))

app.listen(8500, () => {
    console.log("the server is running on port 8500")
})