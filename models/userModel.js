/*
author:Miaojinfen
content:user model
Data:2010-06-19
*/
const mongoose = require('mongoose');

var userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpwd:String,
    role:{
        type:String,
        default:'user'
    }
})

var userModel = mongoose.model('user',userSchema);

exports.userModel = userModel;
