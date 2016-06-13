var _ = require('lodash');

//Para ejecutar de manera Online
// var Pokedex = require('./domain/pokedex')
// var pokedex = new Pokedex();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
var pokemons = require('./collections/pokemons');
var PokedexOffline = require('./domain/pokedexOffline')
var pokedex = new PokedexOffline();

var poke1 = process.argv[2];
var poke2 = process.argv[3];

pokedex.getPokemonByName(poke1)
	.then(function (poke1) {
		pokedex.getPokemonByName(poke2)
		.then(function(poke2) {
			console.log("los pokemons que compiten son: "
			+ poke1.name + " con "+ poke1.getPokemonStats()
			+ " y " 
			+ poke2.name + " con "+ poke2.getPokemonStats());
			
			var ganador = pokedex.getPokemonWithTopStats(poke1,poke2);
			console.log("el ganador es " + ganador.name + " con " + ganador.getPokemonStats());
		});
});

