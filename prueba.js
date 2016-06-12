var _ = require('lodash');

//Para ejecutar de manera Online
// var Pokedex = require('./pokedex')
// var pokedex = new Pokedex();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//var pokemons = require('./pokemons');
var PokedexOffline = require('./pokedexOffline')
var pokedex = new PokedexOffline();

var poke1 = "bulbasaur"
var poke2 = "pikachu"

pokedex.buscarPokemon(poke1)
	.then(function (poke1) {
		pokedex.buscarPokemon(poke2)
		.then(function(poke2) {
			console.log("los pokemons que compiten son: "
			+ poke1.name + " con "+ poke1.calularStats()
			+ " y " 
			+ poke2.name + " con "+ poke2.calularStats());
			
			var ganador = pokedex.compararPokemons(poke1,poke2);
			console.log("el ganador es " + ganador.name + " con " + ganador.calularStats());
		});
			
	});

