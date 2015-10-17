var expect =  require("chai").expect;
var tags =  require("../lib/tags.js");

describe("TAGS", function(){
	describe("#parse() ", function(){
		it("deveria analizar las eqtiquetas", function(){
			var args = ["--depth = 4","--hellow= world"];
			var results = tags.parse(args);

			expect(results).to.have.a.property("depth",4);
			expect(results).to.have.a.property("hello","world");

		})
	});
	//test
});