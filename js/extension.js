Array.prototype.borrar = function(element) {
	for (var i = 0; i < this.length; i++){
		if (this[i] === element )
		{
			this.splice(i,1);			
		}
	}
};
Array.prototype.buscar = function(element){
	var cont = false;
	for (var j = 0; j < this.length; j++){
		if (this[j] === element )
		{
			return ("encontrado: "+ element + " en la posicion: " + (j+1) + " del Array");
			cont === true;
		}
	}
	if (cont === false){
		return ("No se encuentra el elemento: " + element + " en el Array ");
	}
}
Array.prototype.borrarduplicados = function(){
	for (var x = 0; x < this.length; x++){
		for (var y = x+1; y < this.length; y++){
			if(this[x] === this[y]){
				this.splice(y);	
			}
		}		
	}
}
