const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upvotes: {
    type: Array
  },
  downvotes: {
    type: Array
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",  
    required: true
  } 
})

module.exports= mongoose.model('Issue', IssueSchema)