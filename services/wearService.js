/*
 author: Miao jinfen
 content: wears show services
 */
const wearDao = require('../dao/wearDao');

//根据用户提交的参数kind来从数据库中查找不同类型的图片
async function findByKind(kind){
    try{
        var data =await wearDao.findByKind(kind);
        return {success:true,wears:data};
    }catch (e){
        return {success:false,msg:'database is error!'}
    }
}

exports.findByKind=findByKind;


