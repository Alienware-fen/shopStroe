/*
 author: Miao jinfen
 content: slide imgs model
 */
const mongoose = require('mongoose');

var slideSchema =mongoose.Schema({
    _id:Object,
    imgsrc:String
})

var slideModel = mongoose.model('slide',slideSchema);

exports.slideModel = slideModel;
