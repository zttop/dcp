const fs = require('fs')
const path = require('path')
const sequelize = require('../../lib/mysql')
const Sequelize = require('sequelize')

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  // query: query,
  models: {}
}

// const createTable = (sql) => {
//   return db.query(sql, [])
// }

// 整合models文件下的其他js文件
fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')
  }).forEach(function(file) {
    const modelFile = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    // const modelFile = require(path.join(__dirname, file))
    db.models[modelFile.name] = modelFile
    // createTable(modelFile.nitStr)
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// 根据name选择model
db.getModel = function(name) {
  return this.models[name]
}

module.exports = db

