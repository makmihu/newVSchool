const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  process.env.MONGO_URI,
  (err) => console.log('Connected to DB', err)
)
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) 


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
  
app.listen(6500, () => {
    console.log('Server on port 6500')
})