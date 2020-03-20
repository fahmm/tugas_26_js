function panggilforeach(){
	var isi = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
	isi.forEach(function(item,index,array){
	var c = isFinite(item)
	if (c == true) {
		console.log("Angka "+item+" NOT Infinity.")
	}
	else {
		console.log("Angka "+item+" Infinity.")
	}

	;
	
	})
}

panggilforeach()