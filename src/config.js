'use strict'

const path = require('path')

module.exports = {
  port: '3001',
  secret: 'dcpforTEApp',
  publicDir: path.resolve(__dirname, '.,/public'),
  logPath: path.resolve(__dirname, '../logs/dcplog.log'),
  logConfig: {
    pm2: true,
    appenders: {
      console: { type: 'console' },
      dateFile: {
        type: 'dateFile',
        filename: 'dcplog',
        pattern: 'yyyy-MM-dd',
        // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
        keepFileExt: true,
        // 输出的日志文件名是都始终包含 pattern 日期结尾
        alwaysIncludePattern: true,
        // 指定编码格式为 utf-8
        encoding: 'utf-8'
      }
    },
    categories: {
      default: {
        appenders: ['console', 'dateFile'],
        level: 'info'
      }
    }
  }
}
