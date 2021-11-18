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