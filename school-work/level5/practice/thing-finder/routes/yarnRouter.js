const express = require('express')
const yarnRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const yarnCollection = [
    {
        "color": "Maroon",
        "name": "Wine",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Orange",
        "name": "Orange",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Salmon",
        "name": "Coral",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Yellow",
        "name": "Varsity Yellow",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Lime Green",
        "name": "Slime",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Forest Green",
        "name": "Varsity Green",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Teal",
        "name": "Dark Teal",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Turqoise",
        "name": "Aqua",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Light Purple",
        "name": "Lilac",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Purple",
        "name": "Soft Purple",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Dark Purple",
        "name": "Grape",
        "brand": "Big_Twist", 
        "weight": "Medium",
        "numberWeight": "4",
        "material": "100% Acrylic"
    },
    {
        "color": "Pastel Pink",
        "name": "Barely Pink",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Pastel Orange",
        "name": "Coral",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Pastel Yellow",
        "name": "Winter White",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Pastel Green",
        "name": "Barely Green",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Forest Green",
        "name": "Petrol Blue",
        "brand": "Loops&Threads",
        "brandCollection": "Chenille Home Slim",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Deep Blue",
        "name": "?",
        "brand": "Loops&Threads",
        "brandCollection": "Chenille Home Slim",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Dark Blue",
        "name": "Blue Shadow",
        "brand": "Loops&Threads",
        "brandCollection": "Chenille Home Slim",  
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Pastel Blue",
        "name": "Omphalodes",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite", 
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Pastel Purple",
        "name": "Lavender",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite", 
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "White",
        "name": "White",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite", 
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Light Grey",
        "name": "Silver",
        "brand": "Loops&Threads",
        "brandCollection": "Sweet Snuggles Lite", 
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
    {
        "color": "Black",
        "name": "Java",
        "brand": "Loops&Threads",
        "brandCollection": "Chenille Home Slim", 
        "weight": "Super Bulky",
        "numberWeight": "6",
        "material": "100% Polyester"
    },
]

yarnRouter.route("/")
  .get( (req, res) => {
    res.send(yarnCollection)
  })
  .post( (req, res) => {
    const newYarn = req.body
    newYarn._id = uuidv4()
    yarnCollection.push(newYarn)
    res.send(`Added ${newYarn.color} yarn from ${newYarn.brand} to your yarns catalogue`)
  })

//get one
yarnRouter.get("/:yarnId", (req, res) => {
  const yarnId = req.params.yarnId
  res.send(yarnCollection.find(yarn => yarn._id === yarnId))
})

// get by color
yarnRouter.get('/search/color', (req, res) => {
    //   /yarn/search/color?color=${name of color}  
    const color = req.query.color
    res.send(yarnCollection.filter(yarn => yarn.color === color)
)
})

// get by brand
yarnRouter.get('/search/brand', (req, res) => {
    //   /yarn/search/brand?brand=${name of brand}  
    const brand = req.query.brand
    res.send(yarnCollection.filter(yarn => yarn.brand === brand)
)
})




module.exports = yarnRouter