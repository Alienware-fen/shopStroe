/*
 author: Miao jinfen
 content: user router,including register、login、logOut
 */
const userService = require('../services/userService')
const express = require('express');

var router = express.Router();

//register--对用户提交的数据判断是否为空，不为空则将数据添加到数据库中，否则给出提示
router.post('/register',async (req,res)=>{
    var postData = req.body;
    if(postData == undefined || postData == [] || postData == {}){
        res.send({success:false,msg:'user can not empty!'})
    }else{
        var data = await userService.addUser(postData);
        if(data.success){
            res.send({success:true,users:data.users});
        }else{
            res.send(data);
        }
    }
});

//login--只有在数据库中注册过的用户才能进行登录
router.post('/login',async (req,res)=>{
    var postUser = req.body;
    if(postUser == {} || postUser == undefined || postUser == null){
        res.send({success:false,msg:'用户不能为空'});
    }else{
        var data = await userService.loginUser(postUser);
        if(data.success){
            if(postUser.remember=='true'){
                res.cookie('user',data.users,{maxAge:7*24*60*60*1000})
            }
            req.session.user=data.users;
        }
        res.send(data);
    }
})

//logout--清除用户的seccion和cookie
router.use('/logout',(req,res)=>{
    var userSession = req.session.user;
    if(userSession == {} || userSession == undefined || userSession == null){
        res.send('user is not login!Pleace login');
    }else{
        req.session.user ='';
        res.clearCookie('user');
        res.redirect('/index.html');
    }
})

exports.router = router;
