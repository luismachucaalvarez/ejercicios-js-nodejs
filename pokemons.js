// el archivo permite armar un array de pokemons para dar soporte a pokedexOffline.
var Pokemon = require('./pokemon');
var pikachu = require('./pikachu');
var bulbasaur = require('./bulbasaur');

var pokemons = [pikachu,bulbasaur].map(function(poke) {
	return new Pokemon(poke);
});


module.exports = pokemons;

