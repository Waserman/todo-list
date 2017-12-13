
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const conf = require('./conf')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(conf.databaseUrl)
  .connection.on('error', () => {
    throw new Error('unable to connect to database ' + conf.databaseUrl)
  })
  .on('connected', () => {
    console.log('connected to database ' + conf.databaseUrl)
  })

app.get('/server-test', (req, res) => {
  res.send('server-sane')
})

app.use((err, req, res, next) => {
  console.log(err.message, err.code, err.name)
  res.json({
    status: err.status,
    message: err.message
  })
})

app.listen(process.env.PORT || 9090, () => {
  console.log('server running...')
})