## 开发规范

* 项目中遇到的问题及问题解决方法，请记录在doc文件夹下的相关文件里，形成问题解决库很重要。

### 本地环境

```javascript

npm install pm2 -g

```

### 本地调试

```javascript

npm run stop // 关闭服务
npm run dev // 启动服务

```

🌰 http://localhost:3001/api/login?userName=ztt&password=123

#### [数据库配置](./src/sequelize/config.json)

#### [数据库建表、迁移](https://www.sequelize.com.cn/core-concepts/model-querying-finders#findandcountall)

```javascript

npx sequelize-cli db:create // 创建数据库

npx sequelize-cli model:generate --name user --attributes username:string,password:string // 创建 model，生成model文件并创建迁移文件

npx sequelize-cli db:migrate // 迁移，在数据库中创建表

npx sequelize-cli db:migrate:undo // 撤销迁移


```

#### [端口、日志等配置](./src/config.js)
