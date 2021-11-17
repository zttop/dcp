// const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development'
const config = require('../sequelize/config/config')[env]
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

// const pool = mysql.createPool({
//   host: config.mySql.host,
//   user: config.mySql.username,
//   password: config.mySql.password,
//   port: config.mySql.port,
//   database: config.mySql.database
// })

// const query = (sql, values) => {
//   return new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         logger.error(new Error(err))
//         reject(err)
//       } else {
//         logger.info('mysql is opened')
//         connection.query(sql, values, (err, rows) => {
//           if (err) {
//             logger.error(new Error(err))
//             reject(err)
//           } else {
//             resolve(rows)
//           }
//           connection.release()
//         })
//       }
//     })
//   })
// }

module.exports = sequelize
