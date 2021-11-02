'use strict'

const path = require('path')

module.exports = {
  port: '3001',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'dcp',
    username: 'admin',
    password: '12345678',
    host: '127.0.0.1',
    port: 27017
  }
}
