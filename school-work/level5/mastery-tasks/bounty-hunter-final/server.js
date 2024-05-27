const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://makmihu:4fFkqNcKoLG8GKSj@cluster0.xtumebo.mongodb.net/', (err) => {
    console.log('connected to db', err)
})

app.use("/api/bounties", require("./routes/bountiesRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log('server running on port 7000')
})