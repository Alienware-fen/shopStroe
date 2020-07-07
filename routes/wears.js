/*
 author: Miao jinfen
 content: wears item router
 */
const express =require('express');
const wearService=require('../services/wearService');

var router = express.Router();

//根据用户提供的参数来查找数据库中的数据 -- req.query.knid
router.use('/cloths/details',async (req,res)=>{
    var data = await wearService.findByKind(req.query.kind);
    res.send(data);
})

exports.router=router;
