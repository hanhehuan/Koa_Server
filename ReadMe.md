一、项目初始化
1、npm初始化
npm init -y//生成package.json文件，记录项目的依赖
2、git初始化
git init//生成.git隐藏文件夹，git本地仓库
3、创建ReadMe.md文件
二、项目基本搭建
1、npm i koa
2、创建src/main.js文件
'''
const Koa = require('koa')
const app = new Koa();

app.use((ctx,next)=>{
  ctx.body = "hello world"
})

app.listen(3000,()=>{
  console.log("running to http://localhost:3000")
})
'''
3、node src/main.js
三、项目的基本优化
1、自定重启服务
安装nodemon工具
npm i nodemon
编写package.json脚本
'''
"scripts": {
    "dev":"nodemon ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
'''
执行npm run dev
2 读取配置文件
安装dotenv, 读取根目录中的.env文件, 将配置写到process.env中
npm i dotenv
创建.env文件

APP_PORT=8000
创建src/config/config.default.js

const dotenv = require('dotenv')

dotenv.config()

// console.log(process.env.APP_PORT)

module.exports = process.env
改写main.js

const Koa = require('koa')

const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello api'
})

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})

四. 添加路由
路由: 根据不同的 URL, 调用对应处理函数

1 安装 koa-router
npm i koa-router
步骤:

导入包
实例化对象
编写路由
注册中间件
2 编写路由
创建src/router目录, 编写user.route.js

const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

// GET /users/
router.get('/', (ctx, next) => {
  ctx.body = 'hello users'
})

module.exports = router
3 改写 main.js
const Koa = require('koa')

const { APP_PORT } = require('./config/config.default')

const userRouter = require('./router/user.route')

const app = new Koa()

app.use(userRouter.routes())

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
