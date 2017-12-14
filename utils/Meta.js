function isLocalDev () {
  return process.env.NODE_ENV === 'development'
}

function isProduction () {
  return process.env.NODE_ENV === 'production'
}

module.exports = {
  isLocalDev,
  isProduction
}