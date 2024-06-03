const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

todoRouter.route('/')
// Get All Todos
  .get(async (req, res, next) => {
    try {
      const todos = await Todo.find()
      return res.status(200).send(todos)  
    } catch (err) {
      res.status(500)
      return next(err)    
    }
  })
// Add new Todo
  .post(async (req, res, next) => {
    try {
      req.body.user = req.auth._id
      const newTodo = new Todo(req.body)
      const savedTodo = await newTodo.save()
      return res.status(201).send(savedTodo)
    } catch (err) {
      res.status(500)
      return next(err)    
    }
  })

// Get todos by user Id  
todoRouter.get("/user", async (req, res, next) =>{
  try {
    const todos = await Todo.find({ user: req.auth._id})
    return res.status(200).send(todos)
  } catch (err) {
    res.status(500)
    return next(err) 
  }
}) 

todoRouter.route("/:todoId",)
// Delete Todo
  .delete( async (req, res, next) => {
    try {
      const deletedTodo = await Todo.findOneAndDelete(
        { _id: req.params.todoId, user: req.auth._id }
      )
      return res.status(200).send(`Successfully delete todo: ${deletedTodo.title}`)
    } catch (err) {
      res.status(500)
      return next(err)
    }
  })
// Update Todo
  .put( async (req, res, next) => {
    try {
      const updatedTodo = await Todo.findOneAndUpdate(
        { _id: req.params.todoId, user: req.auth._id },
        req.body,
        { new: true }
      )
      return res.status(201).send(updatedTodo)
    } catch (err) {
      res.status(500)
      return next(err)      
    }
  })

module.exports = todoRouter