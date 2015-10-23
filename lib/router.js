function route(handle,pathname){
	console.log("a punto de rutear una peticion par " + pathname);
	if(typeof handle[pathname] == 'function'){
		return handle[pathname];

	}else{
		console.log("Nose encontro manipulador" +  pathname);
		return "404 No Encontrado";
	}
}
exports.route = route;