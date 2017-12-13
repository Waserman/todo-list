const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  compoleted: {
    type: Boolean,
    default: false
  }
})

module.exports =  mongoose.model('task', TaskSchema)