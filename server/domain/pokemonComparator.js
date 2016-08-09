var _ = require('lodash');

var PokemonComparator = function() {

};

// Retorna el pokemon con mayor stat
PokemonComparator.prototype.getTopStat = function(pokemonsAComparar) {
  return this.getByCanon(pokemonsAComparar,function(poke) {
    return poke.getStat();
  });
};

// Compara a los pokemon por un criterio definido en tiempo de ejecución
PokemonComparator.prototype.getByCanon = function(pokemonsAComparar, funcionAUtilizar){
  var pokemonCampeon =  _.maxBy(pokemonsAComparar, funcionAUtilizar);
  return pokemonCampeon;
};

module.exports = PokemonComparator
