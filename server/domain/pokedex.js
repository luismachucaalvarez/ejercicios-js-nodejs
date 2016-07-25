//Clase abstracta de Pokedex
//Metodos: 
//getPokemonsByNames(nombresDePokemon)

var Promise = require('bluebird');

var Pokedex = function() {

};

Pokedex.prototype.getPokemonsByNames = function (nombresDePokemon) {
	var self = this;
	var pokemons = nombresDePokemon.map(function(nombrePokemon) {
		return self.getPokemonByName(nombrePokemon);
	});

	return Promise.all(pokemons);
};

module.exports = Pokedex;