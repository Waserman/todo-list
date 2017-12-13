const express = require('express')
const taskCtrl = require('../controller/taskCtrl')

const router = express.Router()

router.route('/')
  .get(taskCtrl.list)
  .post(taskCtrl.create)

router.route('/:taskId')
  .get(taskCtrl.get)
  .put(taskCtrl.update)
  .delete(taskCtrl.remove)

router.param('taskId', taskCtrl.load)

module.exports = router