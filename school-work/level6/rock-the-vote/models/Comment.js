const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Array
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",  
    required: true
  }, 
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})

module.exports= mongoose.model('Comment', CommentSchema)