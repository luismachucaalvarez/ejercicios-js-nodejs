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

// Compara a los pokemon por un criterio definido en tiempo de ejecucion (por algun motivo no funciona ´ en sublime)
PokemonComparator.prototype.getByCanon = function(pokemonsAComparar, funcionAUtilizar){
	var funcCriterio = eval(funcionAUtilizar);
	var pokemonCampeon =  _.maxBy(pokemonsAComparar, funcCriterio);
	return pokemonCampeon;
};

module.exports = PokemonComparator
