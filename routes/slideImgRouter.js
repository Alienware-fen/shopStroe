/*
 author: Miao jinfen
 content: slide images and index wears item router
 */
const slideService = require('../services/slideImgService')
const userItemService = require('../services/wearService');
const express = require('express');

var router = express.Router();

//轮播图
router.use('/img',async function(req,res){
    var data = await slideService.findSlideImg();
    res.send (data);
})

//起始页图片显示
router.use('/index',async (req,res)=>{
    var data = await userItemService.findByKind(req.query.kind);
    res.send(data);
})

exports.router = router;

