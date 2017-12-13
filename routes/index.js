const express = require('express'),
      taskRoute = require('./tasks');

const router = express.Router()

router.use('/tasks', taskRoute)

module.exports = router