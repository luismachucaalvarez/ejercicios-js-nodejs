var _ = require("lodash");

var Pokemon = function(pokemon) {
	_.assign(this, pokemon);
}

Pokemon.prototype.hacerAlgo = function() {
	// acá puedo usar por ejemplo, this.stats
	console.log("creo que sí funcionó");
}

module.exports = Pokemon;