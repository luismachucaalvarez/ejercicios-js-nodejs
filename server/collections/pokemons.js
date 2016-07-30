// Se arma un array de pokemons para dar soporte a pokedexOffline.
var Pokemon = require('../domain/pokemon');
var pikachu = require('./pikachu');
var bulbasaur = require('./bulbasaur');
var kakuna = require('./kakuna');
var charmander = require('./charmander');

var pokemons = [pikachu,bulbasaur,kakuna,charmander].map(function(poke) {
	return new Pokemon(poke);
});


module.exports = pokemons;

