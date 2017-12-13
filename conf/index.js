const env = process.env.NODE_ENV
const conf = require(`./${env}`)

module.exports = conf;