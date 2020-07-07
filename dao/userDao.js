/*
author:Miao jinfen
content: user operation ,includeing find users and add users
 */
const usermodel = require('../models/userModel');
const md5 = require('../utils/md5/md5');

var userModel = usermodel.userModel;

// ① 查找用户--根据唯一标识，判断用户是否存在。不存在返回提示信息，存在则返回用户的信息
async function findUserByName(name){
    try{
        var data =await userModel.findOne({name:name});
        if(data.name == {} || data.name ==undefined){
            return {success:false,msg:'can not find this user!'};
        }else{
            return {success:true,users:data};
        }
    }catch (err){
        return {success:false,msg:'database is something wrong!'};
    }
}

//② 添加用户--如果数据库中存在，则不能添加，否则添加成功
async  function addUser(users){
    try{
        //注册到数据库之前对密码进行加密操作，只有两次输入的密码一致才能添加到数据库中，否则给出提示信息
        users.password = md5.toMd5(users.password);
        users.cpwd = md5.toMd5(users.cpwd);
        if(users.password != users.cpwd){
            return {success:false,msg:'两次密码不一致，请重新检查！'}
        }else{
            var data = await userModel.create(users);
            if(data == {} || data == undefined || data == null){
                return {success:false,msg:'user can not empty'};
            }else{
                return {success:true,users:data};
            }
        }
    }catch (e){
        return {success:false,msg:e};
    }
}

exports.findUserByName =findUserByName;
exports.addUser = addUser;
