const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://makmihu:Yi1OKIrYRfSPEiNX@mikkiemakesinventory.rbnyity.mongodb.net/', (err) => {
    console.log('connected to db', err)
})

app.use('/api/yarn', require('./routes/yarnRouter'))
app.use('/api/inventory', require('./routes/inventoryRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8050, () => {
    console.log('server running on port 8050')
})