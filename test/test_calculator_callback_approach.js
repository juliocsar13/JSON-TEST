var Calculator = require('../lib/calculator');
var assert = require('chai').assert;

describe('cuando restamos 6 - 8 usamos la calculadora', function(){

	var calculator;

	before(function(){
		calculator = new Calculator();
	});

	it('el resultado deveria de ser -2 en el enfoque de devolcion de llamada ',function(done){
		calculator.substract(6,8,function(result){
			assert.equal(result,-2);
			done();
		})
	});
});