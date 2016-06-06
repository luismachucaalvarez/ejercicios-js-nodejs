var Pokedex = require('./pokedex')

//console.log (pikachu);

var pokedex = new Pokedex();
var nombre1 = "pikachu";
var nombre2 = "bulbasaur";

pokedex.buscarPokemon(nombre1)
	.then(function(poke1) {
		poke1.hacerAlgo();
	});