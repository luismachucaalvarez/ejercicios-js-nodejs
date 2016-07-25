//CLI - Interfave Control Line --> Permite la mostrar por consola los resultados de las llamadas por consola.
//Metodos
// showPokemonStat(pokemonName) // Muestra el Stat de un pokemon
// showPokemonId(pokemonName) // Muestra el Id de un Pokemon
// showPokemons(nombresDePokemon) // Muestra el Pokemon correspondiente al nombre ingresado - usado para debug
// showPokemonChampionByCanon(nombresDePokemon,funcionDeCriterio) //Muestra el pokemon ganador según un criterio de comparación
// showPokemonWithTopStat(nombresDePokemon) // Muestra el pokemon con mayor stat 


"use strict"
var PokemonComparator = require('./domain/pokemonComparator');
var pokemonComparator = new PokemonComparator();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var Pokedex = require('./domain/pokedexOnline')
// var pokedex = new Pokedex();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

var PokedexOffline = require('./domain/pokedexOffline');
var pokedex = new PokedexOffline();

var CLI = function() {
};

// Muestra el stat de un pokemon
CLI.prototype.showPokemonStat = function(pokemonName) {
	pokedex.getPokemonByName(pokemonName).then(function(poke) {
		console.log("El Stat del pokemon " + pokemonName + " es: " + poke.getStat());
	});
};

// Id del pokemon 
// Nota: En este caso puede parecer redundante, 
// dado que pokedex tiene una función similar, pero es la consulta
// dentro del array reducido de la pokedex
CLI.prototype.showPokemonId = function(pokemonName) {
	pokedex.getPokemonByName(pokemonName).then(function(poke) {
		console.log("El Id del Pokemon " + pokemonName + " es: "+ poke.id);
	});
};

// Se utiliza solo para mostrar los pokemons a modo debug
CLI.prototype.showPokemons = function(nombresDePokemon) {
	pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
		console.log(pokemons);
	});
};

// Muestra el campeón según el criterio de comparación ingresado
CLI.prototype.showPokemonChampionByCanon = function(nombresDePokemon,funcionDeCriterio){
	return pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons){
		console.log("Los pokemon que compiten son:");

		var pokemonsParticipantes = pokemons.map(function(poke) {
			return poke.name + " con " + eval(funcionDeCriterio)(poke);
		}).join("\n");
		console.log(pokemonsParticipantes);

		var ganador = pokemonComparator.getByCanon(pokemons,funcionDeCriterio);
		console.log("El ganador es: " + ganador.name + " con: " + eval(funcionDeCriterio)(ganador));
    //console.log(ganador);
  });
};


// /**************************************/

// CLI.prototype.showPokemonWithTopStat = function(nombresdepokemon) {
// 	return this.showPokemonChampionByCanon(
// 		nombresdepokemon
// 		,"(function(poke) { return new PokemonComparator().getTopStat(poke); })"
// 		);
// };
// /**************************************/


//	Muestra el pokemon con mayor stat (compara un array de pokemon)
CLI.prototype.showPokemonWithTopStat = function(nombresDePokemon) {
	pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
		var ganador = pokemonComparator.getTopStat(pokemons);
		console.log("Los pokemon que compiten son:");
		var pokemonsParticipantes = pokemons.map(function(poke) {
			return poke.name + " con " + poke.getStat();
		}).join("\n");
		console.log(pokemonsParticipantes);
		console.log("el ganador es: " + ganador.name + " con " + ganador.getStat());
	});
};

module.exports = CLI;