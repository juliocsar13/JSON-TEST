var expect = require('chai').expect;
var request =  require('request');
var server = require('../libs/server');
describe('servidor respondera un peticion D:', function(){
	before(function(){

		server.listen(8000);

	});
	it('deberia de retornar 200:',function(done){
		request.get('http://localhost:8000', function(err, res,body){
			
			expect(res.statusCode).to.equal(200);
			expect(res.body).to.equal('wrong header');
			done();
		});
	});

	after(function(){
		server.close();
	});
});