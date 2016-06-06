// var Pokedex = require('./pokedex')
var PokedexOffline = require('./pokedexOffline')

var pokedex = new PokedexOffline();
var nombre1 = "pikachu";
var nombre2 = "bulbasaur";

pokedex.buscarPokemon(nombre1)
	.then(function(poke1) {
		poke1.hacerAlgo();
	});
