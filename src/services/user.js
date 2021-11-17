const User = require('../sequelize/models/index').getModel('user')

const user = {
  /**
   * @Description: 登录
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async login(userData) {
    console.log(User)
    console.log('-=-=-=-User-=-=-=-=-')
    return await User.findOne({ where: userData })
  }
}

module.exports = user
