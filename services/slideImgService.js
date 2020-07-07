/*
 author: Miao jinfen
 content: index slide img show services
 */
const slideDao = require('../dao/slideImgDao')

//查找全部图片
async function findSlideImg(){
    var data = await slideDao.findSlideImg();
    return data;
}

exports.findSlideImg =findSlideImg;
