const express = require('express')
const taskCtrl = require('../controller/taskCtrl')

const router = express.Router()

router.route('/')
  .get(taskCtrl.list)
  .post(taskCtrl.create)

router.route('/:id')
  .get(taskCtrl.get)
  .put(taskCtrl.update)
  .delete(taskCtrl.remove)

router.param('id', taskCtrl.load)

module.exports = router