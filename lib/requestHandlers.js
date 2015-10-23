function iniciar(){
	console.log(" manipulacion de peticion 'iniciar' ha sido llamado. ");
	return "hola iniciar"
}

function subir(){
	console.log(" manipulacion de peticion 'subir' ha sido llamdo. ");
	return "hola subir"
}

exports.iniciar =  iniciar;
exports.subir =  subir;