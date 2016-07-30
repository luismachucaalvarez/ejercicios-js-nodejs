"use strict"
// pokedex de consulta offline
// Métodos:
// getPokemonByName(nombrePokemon)

var Pokedex = require("./pokedex");
var Promise = require('bluebird');
var _ = require('lodash');

var promiseResolveAsync = require("./promiseResolveAsync");
var Pokemon = require('./pokemon'); //clase pokemon
var pokemons = require('../collections/pokemons'); // array de pokemon

var PokedexOffline = function() {
};

//Para heredar el prototipo de la clase abstracta Pokedex
PokedexOffline.prototype = Object.create(Pokedex.prototype);

// Dado un *nombrePokemon* devuelve una promesa del mismo.
// La promesa resuelve a un nuevo pokemon (como objeto)
PokedexOffline.prototype.getPokemonByName = function (nombrePokemon) {
  var pokemon = _.find(pokemons,function(poke) {
    return poke.name === nombrePokemon;
  });

  if (pokemon === undefined)
    // return new Promise(function(resolve, reject) {
    //   reject("No existe");
    // })
    return Promise.reject("No se puede encontrar el pokemon " + nombrePokemon);
  else
    return promiseResolveAsync(new Pokemon(pokemon));
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
