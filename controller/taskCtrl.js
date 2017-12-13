const Task = require('../model/task')
const mongoose = require('mongoose')

/**
 * Each time the client send http request with taskID param 
 * the load function will mount the task object over the req object
 * 
 * If the task does no exist - error will be passed on
 */
function load(req, res, next, id) {
  Task.findById(id)
    .exec()
    .then((task) => {
      if (!task) {
        return next(err)
      } else {
        req.task = task
        return next()
      }
    }, (e) => next(e))
    .catch((e) => next(e))
}

function get(req, res, next) {
  res.json(req.task)
}

function create(req, res, next) {
  Task.create({
    body: req.body.body
  }).then((err, task) => {
    if (err) {
      return next(err)
    } else {
      return res.json({
        status: 'success'
      })
    }
  }).catch(e => next(e))
}

function list(req, res, next) {
  const {limit = 50, skip = 0} = req.query

  Task.find().skip(skip).limit(limit).exec()
      .then(tasks => res.json(tasks))
      .catch(e => next(e))
}

function update(req, res, next) {
  const task = req.task
  const updatedTask = Object.assign({}, task, req.body)

  updatedTask.save()
    .then(() => res.json({status: 'success'}))
    .catch(e => next(e))
}

function remove(req, res, next) {
  const task = req.task
  task.remove()
      .then(() => res.json({status: 'success'}))
      .catch(e => next(e))
}

module.exports = {
  load,
  get,
  create,
  update,
  remove,
  list
}