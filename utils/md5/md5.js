/*
 author: Miao jinfen
 content: password encryption function
 */
const crypto = require('crypto')

function toMd5(content){

    var result = crypto.createHash('md5').update(content).digest('hex');
    return result;
}

exports.toMd5 = toMd5;
