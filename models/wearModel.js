/*
 author: Miao jinfen
 content: wears item model
 */

const mongoose = require('mongoose')

var Schema = mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    mem:String,
    kind:{
        type:String,
        default:'kid'
    }
})

var wearModel = mongoose.model('wear',Schema);

exports.wearModel = wearModel;
