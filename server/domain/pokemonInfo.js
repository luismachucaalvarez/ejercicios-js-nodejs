var _ = require('lodash');
var Pokemon = require('./pokemon')
var pokemon = new Pokemon();

var PokemonInfo = function() {

};

// Recupera el pokemon con mayor stat
PokemonInfo.prototype.getTopStat = function(pokemon1, pokemon2) {
  var pokemonsAComparar = [pokemon1,pokemon2];
  var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
    return poke.getPokemonStat();
  }); 
  return pokemonCampeon;
};

PokemonInfo.prototype.getIdpokemon = function(pokemonName) {
	
}

module.exports = PokemonInfo