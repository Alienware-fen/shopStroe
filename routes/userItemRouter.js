/*
 author: Miao jinfen
 content: user1.html wears item  and user1.html slide images router
 */

const userItemService = require('../services/wearService');
const slideService = require('../services/slideImgService');
const express = require('express');

var router = express.Router();

//图片显示
router.use('/item',async (req,res)=>{
    var data = await userItemService.findByKind(req.query.kind);
    res.send(data);
})

//轮播图显示
router.use('/img',async (req,res)=>{
    var data = await slideService.findSlideImg();
    res.send (data);
})

exports.router = router;

