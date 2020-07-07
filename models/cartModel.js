/*
author: Miao jinfen
content: shopping cart item model
 */
const mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
    id:Number,
    pic:String,
    decs:String,
    price:Number,
    num:Number,
})

var cartModel = mongoose.model('shopcar',cartSchema);

exports.cartModel = cartModel;
