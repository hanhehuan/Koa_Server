//控制层
const jwt = require('jsonwebtoken');
const { createUser, getUserInfo } = require('../service/user.service')
const { JWT_SECRET } = require('../config/config.default')//私钥

class UserController{


  async register(ctx,next){

    //1、获取数据
    const { user_name,password } = ctx.request.body;

    //合法性
    if(!user_name || !password) {
      console.error('用户名或密码为空', ctx.request.body)
      ctx.status = 400
      ctx.body = {
        code:'10001',
        message:'用户名或密码为空',
        result:''
      }
      return
    }
    //合理性
    if(getUserInfo({user_name})) {
      ctx.status = 409
      ctx.body = {
        code:'10002',
        message:'用户已经存在',
        result:''
      }
      return
    }

    //2、操作数据库
    const res = await createUser(user_name,password)
    console.log(res);
    //3、返回结果
    ctx.body = {
      code:0,
      message:'用户注册成功',
      result:{
        id:res.id,
        user_name:res.user_name
      }
    }

  }

  async login(ctx,next){
    const { user_name } = ctx.request.body;
    try{
      //从结果中剔除password属性
      const { password, ...res} = await getUserInfo({user_name})
      ctx.body = {
        code:0,
        message:'登录成功',
        result:{
          token:jwt.sign(res,JWT_SECRET,{expiresIn:'1d'}),
        },
      }
    } catch(err) {
      console.error("登录失败",err)
    }
  }


}

module.exports = new UserController()