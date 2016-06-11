var _ = require('lodash');
var Pokemon = require('./pokemons');
var pokemons = require('./pokemons');
// Para ejecutar de manera Online
// var Pokedex = require('./pokedex')
// var pokedex = new Pokedex();

// Para ejecutar de manera Offline
var PokedexOffline = require('./pokedexOffline')
var pokedex = new PokedexOffline();

pokedex.compararPokemons(pokemons[0], pokemons[1]);

// pokedex.buscarPokemon(nombre1)
// 	.then(function(poke) {
// //	console.log(poke.name);
// 	poke.calularStats();
// 	return poke;
// 	});

