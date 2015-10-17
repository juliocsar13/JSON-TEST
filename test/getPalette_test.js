var getPalette = require("../lib/getPalette");
var assert = require("assert");

describe("getPalette", function(){
	it('deberia lanzar error si el resultado no es un array', function(){
		assert.throws(getPalette, /esto no es un array/);
	})

	it('deveria de retornar 3 variables', function(){
		var palette = getPalette();
		assert(Array.isArray(palette));
		assert.equal(palette.length,3,"no devolvio los 3 elementos")

	})
});