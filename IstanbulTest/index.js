var adele_import = require('./adele');

console.log('adele_importn :',new adele_import().song_1);

exports.add = function(a,b,callback){
  callback(a+b);
}

exports.sub = function(a,b,callback){
  callback(a-b);
}
