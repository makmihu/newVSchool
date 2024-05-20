const express = require("express")
const app = express()

app.use(express.json())



app.listen(9000, () => {"server running on port 9000"})