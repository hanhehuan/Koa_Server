//const Koa = require('koa')
//http服务
const { APP_PORT } = require('./config/config.default')
//const userRouter = require('./router/user.router')
const app = require('./app')

//const app = new Koa();
//声明路由
//app.use(userRouter.routes()).use(userRouter.allowedMethods())
//注册路由
/*router.get('/test',(ctx,next)=>{
  console.log('test');
  console.log(ctx.query.a)
  ctx.body = 'test 这个API'
})*/
//中间件
/*app.use((ctx,next)=>{

  ctx.body = "hello world"//返回hello world
  
})*/
//监听3000端口
app.listen(APP_PORT,()=>{
  console.log(`running to http://localhost:${ APP_PORT }`)
})