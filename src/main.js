const Koa = require('koa')
const app = new Koa();
//中间件
app.use((ctx,next)=>{

  ctx.body = "hello world"//返回hello world
  
})
//监听3000端口
app.listen(3000,()=>{
  console.log("running to http://localhost:3000")
})