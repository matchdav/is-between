
# is-between

  Test whether a number n is between min and max.

## Installation

  Install with [component(1)](http://component.io):

    $ component install matchdav/is-between


  Install with npm:

    $ npm install is-between

## API

```javascript
var between = require('is-between');
between(2,3,4) ===false; //true
between(2.3,2,4) ===true; //true
```

For more details on behaviour, here are the unit tests:

```javascript

var between = require('is-between');
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


```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.