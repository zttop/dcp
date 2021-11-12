'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const userServices = require('../services').user
const { InvalidQueryError } = require('../lib/error')
const login = {}
// const fs = require('fs')
// var process = require('child_process')

login.login = async(ctx, next) => {
  const { userName, password } = ctx.request.body
  if (!userName || !password) {
    throw new InvalidQueryError()
  }
  const user = await userServices.login({
    userName: userName,
    password: password
  })

  // try {
  //   const data = fs.writeFileSync('/Users/user/Desktop/ztt-ly/dcp/dist/test.html', content)
  //   console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  //   console.log(data)
  //   const res = process.exec('npm run upload', {encoding: 'UTF-8'}, (A)=>{
  //     console.log(A)
  //     console.log('OPOPOPOPOPOPOP')
  //   })
  //   console.log('-=-=-=-=-=-=-=1-=-=-=-=-=-=-=')
  //   console.log(res)

  // } catch (err) {
  //   console.error(err)
  // }

  if (!user) {
    ctx.result = ''
    ctx.msg = '用户不存在'
  } else {
    ctx.result = jwt.sign({
      data: user._id,
      // 设置 token 过期时间
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 60 seconds * 60 minutes = 1 hour
    }, config.secret)
  }
  return next()
}

module.exports = login
