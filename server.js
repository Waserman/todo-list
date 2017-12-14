const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const conf = require('./conf')
const routes = require('./routes')
const app = express()
const cors = require('cors')
const Meta = require('./utils/Meta')
const open = require('open')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig) 
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

//mogoose default Promise is deprecated
mongoose.Promise = global.Promise

mongoose.connect(conf.databaseUrl)
  .connection.on('error', () => {
    throw new Error('unable to connect to database ' + conf.databaseUrl)
  })
  .on('connected', () => {
    console.log('connected to database ' + conf.databaseUrl)
  })

// if (Meta.isLocalDev) {
//   app.use('/public/', express.static(path.join(__dirname, 'src/dist')))
// }

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.use('/api', (req, res, next)=>{
  return next()
},routes)

app.use((err, req, res, next) => {
  console.log(err.message, err.code, err.name)
  res.json({
    status: err.status,
    message: err.message
  })
})

app.listen(process.env.PORT || 9090, (err) => {
  if (!err) {
    console.log('server runing on port ' + process.env.PORT)
    open('http://localhost:9090/')
  }
})