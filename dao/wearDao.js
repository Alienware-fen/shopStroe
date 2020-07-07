const wearmodel = require('../models/wearModel');

var wearModel=wearmodel.wearModel;

// 根据客户端传递的kind参数来查询同一类型的衣服
async function findByKind(kind){
    var data = await wearModel.find({kind:kind});
    return data;
}

exports.findByKind=findByKind;
