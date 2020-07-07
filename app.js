//引用下载的包
const express = require('express')
const expressstatic = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

//引用自定义的包
const dbConnect = require('./utils/db/mongodbConnect');
const slideRouter = require('./routes/slideImgRouter')
const userRouter  =require('./routes/userRouter');
const viewRouter = require('./routes/viewRouter');
const wearRouter = require('./routes/wears');
const itemRouter = require('./routes/userItemRouter');
const cartRouter = require('./routes/cartRouter')

//创建服务器+监听
var app = express();
app.listen(8080,function(err){
    if(!err){
        console.log('服务器启动成功！')
    }
})

//链接数据库
dbConnect.dbConnect();

//使用cookie、session
app.use('/users',bodyParser.urlencoded());
app.use(cookieParser());
var keys=[];
for(var i=0;i<100;i++){
    var str ='1243jkdjsanfasd'+Math.random(10000);
    keys.push(str);
}
app.use(cookieSession({
    name:'storeOnline',
    keys:keys,
    maxAge:20*60*1000
}))

//使用路由
//① 登陆注册
app.use('/users',userRouter.router);
//② 轮播图
app.use('/slide',slideRouter.router);
//③ 自动登陆
app.use('/views',viewRouter.router);
//④ men + women + kids+ mobile
app.use('/wears',wearRouter.router);
//⑤ user1.html
app.use('/main',itemRouter.router)
// ⑥ 购物车
app.use('/cart',cartRouter.router);

//起始页--路由的函数链
app.use('/',function(req,res,next){
    var url = req.url;
    options={
        root:__dirname + '/www/',
        dotfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    }
    if(url.indexOf('/')==0 && url.length>1){
        next();
    }else{
        res.sendFile('index.html',options,function(err){
            if(err){
                console.log('index is err')
            }
        })
    }
})

app.use(expressstatic('./www'));