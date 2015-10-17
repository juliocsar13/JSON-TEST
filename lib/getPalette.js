function getData(){
	return ["#cccccc","#900455","#0055ff"];
	//return "hellow world"
}
module.exports = function() {
	var palette = getData();

	if(!Array.isArray(palette)){
		throw new Error("palette no es una array D:")
	}
	return palette;
};