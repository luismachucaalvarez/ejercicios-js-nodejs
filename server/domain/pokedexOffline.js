"use strict"
// pokedex de consulta online
// Métodos:
// getPokemonByName(name)

var _ = require('lodash');

var promiseResolveAsync = require("./promiseResolveAsync");
var Pokemon = require('./pokemon'); //clase pokemon
var pokemons = require('../collections/pokemons'); // array de pokemon

var PokedexOffline = function() {
};

// Dado un *nombrePokemon* devuelve una promesa del mismo.
// La promesa resuelve a un nuevo pokemon (como objeto)
PokedexOffline.prototype.getPokemonByName = function (nombrePokemon) {
  var pokemon = _.find(pokemons,function(poke) { 
    return poke.name === nombrePokemon;
  });

  return promiseResolveAsync(new Pokemon(pokemon));
};

module.exports = PokedexOffline;

// Ayuda:
// var pokemonRealPromise = Promise.resolve(JSON.parse(pikachu)) // -->sincrónico
 // var pokemonRealPromise = promiseResolveAsync(JSON.parse(pikachu)); // -->asincrónico