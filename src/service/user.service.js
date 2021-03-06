//数据处理层，主要操作数据库
//引入model层
const User = require('../model/user.model')

class UserService{

  async createUser(user_name,password){
    // todo:写入数据库操作
    //插入数据
    /*User.create({
      // 表的字段
      user_name:user_name,
      password:password
    })*/
    // await表达式: promise对象的值
    const res = await User.create({user_name,password})
    console.log(res)
    return res.dataValues;
  }

  async getUserInfo({id,user_name,password,is_admin}){
    const whereOpt = {}
    id && Object.assign(whereOpt,{id})
    user_name && Object.assign(whereOpt,{user_name})
    password && Object.assign(whereOpt,{password})
    is_admin && Object.assign(whereOpt,{is_admin})

    const res = await User.findOne({
      attributes:['id','user_name','password','is_admin'],
      where:whereOpt
    })
    
    return res?res.dataValues:null;

  }

}

module.exports = new UserService()