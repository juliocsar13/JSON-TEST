var Calculator = require('../lib/calculator');
var expect = require('chai').expect;


describe('Estamos sumando 1 y 2 usando una calculadora',function(){
	var calculator;

	before(function(){
		calculator = new Calculator();
 	});


	it('el resultado deberia de retornar 3 usando el enfoque de estilo de retorno',function(){
		//codigo 
		var result = calculator.add(1,2);
		expect(result).equal(3); 
	});

});
