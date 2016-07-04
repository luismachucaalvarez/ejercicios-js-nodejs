// Permite obtener cierta información del pokemon

var _ = require('lodash');

var PokemonComparator = function() {

};

// Recupera el pokemon con mayor stat
PokemonComparator.prototype.getTopStat = function(pokemons) {
  var pokemonsAComparar = pokemons;
  var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
    return poke.getStat();
  }); 
  return pokemonCampeon;
};

// PokemonComparator.prototype.getTopStat = function(pokemon1, pokemon2) {
//   var pokemonsAComparar = [pokemon1,pokemon2];
//   var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
//     return poke.getStat();
//   }); 
//   return pokemonCampeon;
// };

module.exports = PokemonComparator