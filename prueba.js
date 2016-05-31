var Pokedex = require('./pokedex')

var pokedex = new Pokedex();
var nombre = "pikachu"


pokedex.buscarPokemon(nombre)
	.then(function (pokemon) {
		console.log (pokemon.stats);
	});
