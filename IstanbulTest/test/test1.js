var should = require('chai').should();
var expect = require('chai').expect;
var index = require("../index.js");

describe('test1',function(){
  it('should return true',function(){
    index.add(5,9,function(res){
      console.log('res :',res);
      res.should.equal(14);
    });
  });
});
