//app业务
const Koa = require('koa')
const koaBody = require('koa-body')

const userRouter = require('../router/user.route')
const errHandler = require('./errHandler')

const app = new Koa()
// 统一的错误处理
app.on('error',errHandler)

app.use(koaBody())
app.use(userRouter.routes())

module.exports = app