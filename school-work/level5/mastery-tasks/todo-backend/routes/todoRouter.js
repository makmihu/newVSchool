const express = require("express")
const todosRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
  {
    _id: uuidv4(),
    name: "the name",
    description: "description of the todo",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    completed: false
  },
  {
    _id: uuidv4(),
    name: "crochet baby's breath",
    description: "finish crocheting the different baby's breath flowers and put them together to make the buch of them",
    imageUrl: "https://images.unsplash.com/photo-1700171518313-5dd219beaaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JvY2hldCUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    completed: false
  },
  {
    _id: uuidv4(),
    name: "finish roses",
    description: "finish crocheting the roses",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    completed: false
  },
]

todosRouter.route('/')
  .get((req, res) => {
    res.send(todos)
  })
  .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to your todo list.`)
  })

todosRouter.route('/:todoId')
  .get((req, res) => {
    const todoId = req.params.todoId
    res.send(todos.find(todo => todo._id === todoId))
  })
  .delete((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id == todoId)
    todos.splice(todoIndex, 1)
    res.send(`Successfully removed from your todo list.`)
  })
  .put((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id == todoId)
    const updatedTodos = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodos)
  })

module.exports = todosRouter