const cartService = require('../dao/cartDao');

//删除商品
async function delStore(storeId){
    var dataStore = await cartService.findStore(storeId);
    if(dataStore.success){
        var data = await cartService.delStore(storeId);
        return {success:ture,store:data.store}
    }else{
        return dataStore;
    }
}

exports.delStore = delStore;
