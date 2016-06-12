var _ = require('lodash');
var Pokemon = require('./pokemons');
var pokemons = require('./pokemons');
// Para ejecutar de manera Online
// var Pokedex = require('./pokedex')
// var pokedex = new Pokedex();

// Para ejecutar de manera Offline
var PokedexOffline = require('./pokedexOffline')
var pokedex = new PokedexOffline();

var ganador = pokedex.compararPokemons(pokemons[0], pokemons[1]);

  

console.log("los pokemons que compiten son: "
	+ pokemons[0].name + " con "+ pokemons[0].calularStats()
	+ " y " 
	+ pokemons[1].name + " con "+ pokemons[1].calularStats());

console.log("el ganador es " + ganador.name + " con " + ganador.calularStats());
