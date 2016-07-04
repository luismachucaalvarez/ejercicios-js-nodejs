"use strict"
var PokemonComparator = require('./domain/pokemonComparator');
var pokemonComparator = new PokemonComparator();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var Pokedex = require('./domain/pokedex')
// var pokedex = new Pokedex();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

var PokedexOffline = require('./domain/pokedexOffline');
var pokedex = new PokedexOffline();

var CLI = function() {
};

//Muestra el pokemon con mayor stat (compara un array de pokemon)
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

// Stat Total del pokemon
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


CLI.prototype.showPokemons = function(nombresDePokemon) {
  pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
    console.log(pokemons);
  });
};

module.exports = CLI;