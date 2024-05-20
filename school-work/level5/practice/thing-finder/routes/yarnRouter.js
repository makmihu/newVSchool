const express = require('express')
const yarnRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const yarn = [
    {
        color: "",
        brand: "", 
        type: "",
    }
]



module.exports = yarnRouter