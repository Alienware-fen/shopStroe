/*
 author: Miao jinfen
 content: database connection function
 */
const mongoose = require('mongoose')

function dbConnect(){
    mongoose.connect('mongodb://169.254.95.200:27017/shopline');
    mongoose.connection.once('open',function(err){
        if(!err){
            console.log('mongo is connect success');
        }else{
            console.log('mongo is connect err....');
        }
    })
}

exports.dbConnect=dbConnect;
