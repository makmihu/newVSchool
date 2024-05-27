const express = require("express")
const app = express()

app.use(express.json())

app.use('/todoList', require('./routes/todoRouter'))

app.listen(9000, () => {
    console.log("server 9000 is running")
})