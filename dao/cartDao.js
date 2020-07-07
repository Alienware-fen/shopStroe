const cartmodel = require('../models/cartModel');

var cartModel = cartmodel.cartModel;

//查找商品
async function findStore(storeId){
    if(storeId == undefined || storeId == null){
        return {success:false,msg:'store is not exit!'};
    }else{
        var data = await cartModel.findOne({id:storeId})
        return {success:true,store:data};
    }
}

//删除商品
async function delStore(storeId){
    if(storeId == undefined || storeId == null){
        return {success:false,msg:'store id can not empty!'};
    }else{
        var data = await cartModel.deleteOne({id:storeId})
        return {success:true,store:data};
    }
}

exports.findStore = findStore;
exports.delStore = delStore;