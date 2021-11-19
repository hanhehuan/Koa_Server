//数据库连接层
const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,//连接地址
  MYSQL_PORT,//连接端口
  MYSQL_USER,//连接账号
  MYSQL_PWD,//连接密码
  MYSQL_DB,//数据库名
} = require('../config/config.default')
//数据库连接实例
const seq = new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PWD,{
  host : MYSQL_HOST,
  dialect:'mysql',
})

seq
    .authenticate()
    .then(()=>{
      console.log('数据库连接成功')
    })
    .catch((err)=>{
      console.log('数据库连接失败',err)
    })

module.exports = seq;