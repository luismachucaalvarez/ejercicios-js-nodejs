var _ = require('lodash');
var Pokemon = require('./pokemons');

//Para ejecutar de manera Online
// var Pokedex = require('./pokedex')
// var pokedex = new Pokedex();
// var poke1 = "bulbasur"
// var poke2 = "pikachu"

// pokemon1 = pokedex.buscarPokemon(poke1);

// console.log(pokemon1);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
var pokemons = require('./pokemons');
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


; //promise
//var pokemon2 = pokedex.buscarPokemon(poke2); //promise



//var ganador = pokedex.compararPokemons(pokemon1, pokemon2);

// console.log("los pokemons que compiten son: "
// 	+ pokemon1.name + " con "+ pokemon1.calularStats()
// 	+ " y " 
// 	+ pokemon2.name + " con "+ pokemon2.calularStats());

// console.log("el ganador es " + ganador.name + " con " + ganador.calularStats());

// //comparando pokemons
// // // var ganador = pokedex.compararPokemons(pokemons[0], pokemons[1]);
// // var ganador = pokedex.compararPokemons(pokemon1, pokemon2);

// console.log("los pokemons que compiten son: "
// 	+ pokemons[0].name + " con "+ pokemons[0].calularStats()
// 	+ " y " 
// 	+ pokemons[1].name + " con "+ pokemons[1].calularStats());

// console.log("el ganador es " + ganador.name + " con " + ganador.calularStats());

