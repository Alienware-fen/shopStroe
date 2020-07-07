const cartService = require('../services/cartService')
const express = require('express')

var router = express.Router();


// 删除商品
router.delete('/delstore/:id',async (req,res)=>{
    if(req.params.id == undefined || req.params.id ==''){
        res.send({success:false,msg:'删除的商品不能为空!'})
    }else{
        var data =await cartService.delStore(req.params.id);
        res.send(data);
    }
})

exports.router = router;

