const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports =  mongoose.model('task', TaskSchema)