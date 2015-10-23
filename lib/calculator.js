var EventEmitter =  require('events').EventEmitter, 
			util = require('util');

			processResult =  function(calculator,result,callback){
				calculator.emit('result',result);
				if (typeof callback != 'undefined') {
					setTimeout(function(){
						callback(result);
					},1000,this);
				}else{
					return result;
				}
			};

		function calculator(){
			EventEmitter.call(this);
		}

		util.inherits(calculator, EventEmitter);

		calculator.prototype.add = function(a,b, callback){
			var result = a+b;
			return processResult(this,result,callback);
		};

		calculator.prototype.substract = function(a,b,callback){
			var result = a-b;
			return processResult(this,result,callback);
		};
		calculator.prototype.multiply = function(a,b,callback){
			var  result = a*b;
			return processResult(this,result,callback);
		};
		calculator.prototype.divide =  function(a,b,callback){
			var result = a/b;
			return processResult(this,result,callback);
		}
module.exports = calculator;