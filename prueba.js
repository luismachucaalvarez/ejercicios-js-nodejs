var _ = require('lodash');
// Para ejecutar de manera Online
// var Pokedex = require('./pokedex')
// var pokedex = new Pokedex();

// Para ejecutar de manera Offline
var PokedexOffline = require('./pokedexOffline')
var pokedex = new PokedexOffline();

var nombre1 = "pikachu";
var nombre2 = "bulbasaur";

pokedex.buscarPokemon(nombre1)
	.then(function(poke) {
//	console.log(poke.name);
	poke.calularStats();
	return poke;
	});

