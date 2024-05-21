const express = require("express")
const app = express()

app.use(express.json())

app.use("/yarn", require("./routes/yarnRouter"))

app.listen(9000, () => {console.log("server running on port 9000")})