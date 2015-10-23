var Calculator = require('../lib/calculator'); 
var	sinon = require('sinon');
var assert = require('chai').assert;

	describe('cuando multiplique 9 * 3 usando la calculadora',function(){
		
		var calculator, 
			eventEmitterStub, 
			callbackSpy, 
			clock;

		before(function(){
			calculator = new Calculator();
			clock = sinon.useFakeTimers();
			eventEmitterStub = sinon.stub(calculator,'emit');
			callbackSpy = sinon.spy();

		});

		it('deveria de emitir el evento antes del collback',function(done){
			calculator.multiply(9,3,callbackSpy);
			clock.tick(1000);
			assert.equal(callbackSpy.called, true);
			assert.equal(eventEmitterStub.calledWithExactly('result',27),true);
			assert.equal(eventEmitterStub.calledBefore(callbackSpy),true);
			done();

		})

		after(function(){
			clock.restore();
		});
	});