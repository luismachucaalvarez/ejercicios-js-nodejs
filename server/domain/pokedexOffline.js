"use strict"
// pokedex de consulta offline
// Métodos:
// getPokemonByName(nombrePokemon)
// getPokemonsByNames(nombresDePokemon)

var Promise = require('bluebird');
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

PokedexOffline.prototype.getPokemonsByNames = function (nombresDePokemon) {
  var self = this;
  var pokemons = nombresDePokemon.map(function(nombrePokemon) {
    return self.getPokemonByName(nombrePokemon);
  });

  return Promise.all(pokemons);
};

module.exports = PokedexOffline;

// Ayuda:
// var pokemonRealPromise = Promise.resolve(JSON.parse(pikachu)) // -->sincrónico
// var pokemonRealPromise = promiseResolveAsync(JSON.parse(pikachu)); // -->asincrónico
// Promise.all
/*
  **recibe** un array de promesas.
  **devuelve** una promesa que **resuelve** a un array, 
  con los valores de resolución de cada promesa.
*/
