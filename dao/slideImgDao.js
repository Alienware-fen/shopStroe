/*
author:Miao jinfen
content: picture slide function
 */
const slidemodel = require('../models/slideImgModel');
var sildeImgModel = slidemodel.slideModel;

// 查找所有图片
async function findSlideImg(){
    try{
        var data = await sildeImgModel.find({});
        return data;
    }catch(e){
        console.log('哦豁，数据库出错啦。。')
    }
}

exports.findSlideImg = findSlideImg;
