var _ = require("lodash");

var Pokemon = function(pokemon) {
	_.assign(this, pokemon);
};

Pokemon.prototype.hacerAlgo = function() {
	// acá puedo usar por ejemplo, this.stats
	console.log("creo que sí funcionó");
};

Pokemon.prototype.calularStats = function() {
	var statsTotales = _.sum(this.stats.map(function(stat) {
		return stat.base_stat;
	}));
	//console.log("Hola soy " + this.name + " y tengo " + statsTotales + " de poder");
	return statsTotales;
};


/*Primera versión
Pokemon.prototype.calularStats = function() {
	var baseStats = this.stats.map(function(stat) {
		return stat.base_stat;
	});
	var totalStats = _.sum(baseStats);
	console.log("El array de stars es " , baseStats);
	console.log("El stat total es ", totalStats)
	// console.log(this.stats);
	// return this.stats;
}
*/
module.exports = Pokemon;