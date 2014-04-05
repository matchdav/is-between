var between = require('..');
require('should');

describe('between',function(){
	it('should be a function',function(){
		between.should.be.type('function');
	});
	it('should throw an error with no arguments',function(){
		between.bind(null).should.throw();
	});
	it('should throw an error with invalid argument order',function(){
		between.bind(null,2,4,3).should.throw();
	});
	it('should return true if number is in range',function(){
		between(3,2,4).should.be.true;
	});
	it('should return false if number is not in range',function(){
		between(2,3,4).should.be.false;
	});
	it('should return true if number is equal to any number in the range',function(){
		between(2,2,4).should.be.true;
		between(4,2,4).should.be.true;
	});
	it('should work with negative numbers',function(){
		between(2,-2,4).should.be.true;
		between(-2,-2,4).should.be.true;
		between(-1,-2,4).should.be.true;
		between(-3,-2,4).should.be.false;
		between(-2,-2,-1).should.be.true;
	});
	it('should work with floats',function(){
		between(2.0,-2.0,4.0).should.be.true;
		between(-2.1,-2.2,4.3).should.be.true;
		between(-1.2,-2.3,4.3).should.be.true;
		between(-3.2,-2.2,4.5).should.be.false;
		between(-2.2,-2.2,-1.2).should.be.true;
	});
	it('should work with strings',function(){
		between('2.0',-2.0,4.0).should.be.true;
		between(-2.1,'-2.2',4.3).should.be.true;
		between('-1.2','-2.3','4.3').should.be.true;
		between(-3.2,'-2.2','4.5').should.be.false;
		between('-2.2',-2.2,'-1.2').should.be.true;
	});
});