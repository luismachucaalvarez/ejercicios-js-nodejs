// Permite obtener cierta información del pokemon

var _ = require('lodash');

var PokemonComparator = function() {

};

// Recupera el pokemon con mayor stat
PokemonComparator.prototype.getTopStat = function(pokemonsAComparar) {
	var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
		return poke.getStat();
	}); 
	return pokemonCampeon;
};

module.exports = PokemonComparator