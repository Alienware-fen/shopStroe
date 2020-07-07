/*
 author: Miao jinfen
 content: user auto ligon router and user role router
 */
const userService = require('../services/userService')
const express = require('express')
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var router = express.Router();

// ① 根据角色实现自动登陆--普通用户可以自动登陆，管理员不能自动登陆
router.use('/loginPage.html',async (req,res,next)=>{
    var userCookie = req.cookies.user;
    //没有cookie，说明没有登陆过，继续执行下一步
    if(userCookie == {} || userCookie ==undefined){
        next();
    }else if(userCookie.role == 'user'){ //普通用户--自动登陆
        var data = await userService.loginCookie(userCookie);
        if(data.success){
            req.session.user=data.users;
            res.redirect('./pages/user1.html');
        } else{
            next();
        }
    }else{//管理员，不做处理
        next();
    }
})

// ② 普通用户权限管理
router.use('/pages',(req,res,next)=>{
    var userSession = req.session.user;
    if(userSession == {} || userSession == undefined || userSession == []){
        res.redirect('/views/loginPage.html');
    }else{
        next();
    }
})

//③ 管理员权限管理
router.use('/admin',(req,res,next)=>{
    var userSession = req.session.user;
    if(userSession == {} || userSession == undefined || userSession == []){
        res.redirect('/views/loginPage.html');
    }else if(userSession.role == 'user'){
        res.redirect('/index.html');
    }else{
        next();
    }
})

exports.router = router;

