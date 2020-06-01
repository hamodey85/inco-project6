const uuid = require('uuid')

let expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
const appConfig = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
}

const sessConfig = {
  genid: () => uuid.v4(),
  secret: 'I will Never GiveUp ! :boxing_glove:',
  resave: false,
  saveUninitialized: true,
  expires: expiryDate,
}

module.exports = { sessConfig, appConfig }
