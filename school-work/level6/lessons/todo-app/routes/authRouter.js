const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//signup
authRouter.post('/signup', async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username.toLowerCase()}) 
    if(user){
      res.status(403)
      return next(new Error('That username is already taken'))
    }
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
                    //payload            //secret
    const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
    return res.status(201).send({ token, user: savedUser.toObject() })
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

// login
authRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username.toLowerCase()}) 
    if(!user){
      res.status(403)
      return next(new Error('Username or Password is incorrect'))
    }
    if(req.body.password != user.password){
      res.status(403)
      return next(new Error('Username or password are incorrect')) 
    }
    const token = jwt.sign(user.toObject(), process.env.SECRET)
    return res.status(200).send({ token, user: user.toObject() })
  } catch (error) {
    res.status(500)
    return next(err)
  }
})

module.exports = authRouter