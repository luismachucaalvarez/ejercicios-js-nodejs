"use strict"
var PokemonComparator = require('./domain/pokemonComparator');
var pokemonComparator = new PokemonComparator();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var PokedexOnline = require('./domain/pokedexOnline')
// var pokedex = new PokedexOnline();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

var PokedexOffline = require('./domain/pokedexOffline');
var pokedex = new PokedexOffline();

var CLI = function() {
};

//Muestra el pokemon con mayor stat (compara un array de pokemon)
CLI.prototype.showPokemonWithTopStat = function(nombresDePokemon) {
  return pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
    var ganador = pokemonComparator.getTopStat(pokemons);
    console.log("Los pokemon que compiten son:");
    var pokemonsParticipantes = pokemons.map(function(poke) {
      return poke.name + " con " + poke.getStat();
    }).join("\n");
    console.log(pokemonsParticipantes);
    console.log("el ganador es: " + ganador.name + " con " + ganador.getStat());
  });
};

// Solo muestra al pokemon Total del pokemon
CLI.prototype.showPokemon = function(pokemonName) {
  return pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("El pokemon es: " + poke.name);
  });
};

// Stat Total del pokemon
CLI.prototype.showPokemonStat = function(pokemonName) {
  return pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("El Stat del pokemon " + pokemonName + " es: " + poke.getStat());
  });
};

// Id del pokemon
// Nota: En este caso puede parecer redundante,
// dado que pokedex tiene una función similar, pero es la consulta
// dentro del array reducido de la pokedex
CLI.prototype.showPokemonId = function(pokemonName) {
  return pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("El Id del Pokemon " + pokemonName + " es: "+ poke.id);
  });
};

//Se utiliza solo para mostrar los pokemons a modo debug
CLI.prototype.showPokemons = function(nombresDePokemon) {
  return pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
    console.log(pokemons);
  });
};

CLI.prototype.tryToDo = function(unaFuncion) {
  return unaFuncion().catch(function(error){
    console.log(error);
    return error;
  });
};


module.exports = CLI;
