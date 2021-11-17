// const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development'
const config = require('../sequelize/config')[env]
const { logger } = require('../middlewares/logger')
const { Sequelize } = require('sequelize')

let sequelize = null
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

// 对连接进行测试，查看控制台
sequelize
  .authenticate()
  .then(() => {
    logger.info('Sequelize is opened')
  })
  .catch((err) => {
    logger.error(new Error(err))
  })

module.exports = sequelize
