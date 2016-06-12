"use strict"
// pokedex de consulta online

var rp = require('request-promise');
var Promise = require('bluebird');
var _ = require('lodash');

var promiseResolveAsync = require("./promiseResolveAsync");
var Pokemon = require('./pokemon'); //clase pokemon
var pokemons = require('./pokemons'); // array de pokemon

var PokedexOffline = function() {

};

PokedexOffline.prototype.findIdByName = function(name) {
  if (name === null) return null;
  var pokemon = this.pokemons.filter(function(pokemon) {
    return pokemon.name.toUpperCase() === name.toUpperCase();
  })[0];

  return (pokemon !== null)
  ? parseInt(pokemon.dec)
  : null;
};

// Dado un *nombrePokemon* devuelve una promesa del mismo.
// La promesa resuelve a un nuevo pokemon
PokedexOffline.prototype.buscarPokemon = function (nombrePokemon) {
  var pokemon = _.find(pokemons,function(poke) { 
    return poke.name === nombrePokemon;
  });

  return promiseResolveAsync(new Pokemon(pokemon));
};

PokedexOffline.prototype.compararPokemons = function(pokemon1, pokemon2) {
  var losStatsP1 = pokemon1.calularStats();
  var losStatsP2 = pokemon2.calularStats();
  console.log(pokemon1.name);  //OK
  console.log("Los Stats que tiene son: ", losStatsP1); // undefined T_T
    
  console.log(pokemon2.name);  //OK
  console.log("Los Stats que tiene son: ", losStatsP2); // undefined T_T


};


module.exports = PokedexOffline;

// Ayuda:
// var pokemonRealPromise = Promise.resolve(JSON.parse(pikachu)) // -->sincrónico
 // var pokemonRealPromise = promiseResolveAsync(JSON.parse(pikachu)); // -->asincrónico