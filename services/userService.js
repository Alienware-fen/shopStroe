/*
 author: Miao jinfen
 content: user operator service,including register、login、auto login
 */
const userDao = require('../dao/userDao');
const md5 = require('../utils/md5/md5');

//① 用户注册--调用dao层的findByName 和 addUser方法
async function addUser(users){
    var dataUsers = await userDao.findUserByName(users.name);
    if(dataUsers.success){
        return {success:false,msg:'user is exit!'};
    }else{
        var data = await userDao.addUser(users);
        return data;
    }
}

//② 用户登陆--调用dao层的findByName 和 loginUser
async function loginUser(users){
    var dataUsers = await userDao.findUserByName(users.name);
    if(dataUsers.success){
        var password = md5.toMd5(users.password);
        if(password == dataUsers.users.password){
            return {success:true,users:dataUsers.users};
        }else{
            return {success:false,msg:'password is error!'}
        }
    }else{
        return {success:false,msg:'user is not exit!'};
    }
}

//③ 自动登陆--防止暴力登陆，需要进行密码验证
async function loginCookie(user){
    var dataUsers = await userDao.findUserByName(user.name);
    if(dataUsers.success){
        if(dataUsers.users.password == user.password){
            return {success:true,users:dataUsers.users};
        }else{
            return {success:false,msg:'user password is something error'};
        }
    }else{
        return {success:false,msg:'user is not exit!'};
    }
}

exports.addUser=addUser;
exports.loginUser=loginUser;
exports.loginCookie=loginCookie;

