var _ = require("lodash");

var Pokemon = function(pokemon) {
	_.assign(this, pokemon);
};

Pokemon.prototype.getPokemonStats = function() {
	var statsTotales = _.sum(this.stats.map(function(stat) {
		return stat.base_stat;
	}));
	return statsTotales;
};

module.exports = Pokemon;