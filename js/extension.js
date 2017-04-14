Array.prototype.borrar = function(element) {
	for (var i = 0; i < this.length; i++){
		if (this[i] === element )
		{
			this.splice(i,1);
		}
	}
};

Array.prototype.buscar = function(element){
	for (var j = 0; j < this.length; j++){
		if (this[j] === element )
		{
			return ("encontrado: "+ element + " en la posicion: " + (j+1) + " del Array");
		}
	}

}
