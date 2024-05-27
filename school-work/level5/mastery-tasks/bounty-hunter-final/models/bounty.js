const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    bountyAmount: {
        type: Number,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        lowercase: true,
        required: true,
        enum: ['jedi', 'sith'],
    }
})

module.exports = mongoose.model('Bounty', bountySchema)