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
  var pokemonsAComparar = [pokemon1,pokemon2];
  var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
    return poke.calularStats();
  }); 
  return pokemonCampeon;
};


module.exports = PokedexOffline;

// Ayuda:
// var pokemonRealPromise = Promise.resolve(JSON.parse(pikachu)) // -->sincrónico
 // var pokemonRealPromise = promiseResolveAsync(JSON.parse(pikachu)); // -->asincrónico