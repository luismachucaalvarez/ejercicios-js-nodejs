"use strict"
// pokedex de consulta online
// Métodos:
// findIdByName(name)
// getPokemonByName(name)
// getPokemonWithTopStats(pokemon1,pokemon2)


var rp = require('request-promise');
var Promise = require('bluebird');
var _ = require('lodash');

var promiseResolveAsync = require("./promiseResolveAsync");
var Pokemon = require('./pokemon'); //clase pokemon
var pokemons = require('../collections/pokemons'); // array de pokemon

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
PokedexOffline.prototype.getPokemonByName = function (nombrePokemon) {
  var pokemon = _.find(pokemons,function(poke) { 
    return poke.name === nombrePokemon;
  });

  return promiseResolveAsync(new Pokemon(pokemon));
};

PokedexOffline.prototype.getTopStats = function(pokemon1, pokemon2) {
  var pokemonsAComparar = [pokemon1,pokemon2];
  var pokemonCampeon = _.maxBy(pokemonsAComparar, function(poke) {
    return poke.getPokemonStats();
  }); 
  return pokemonCampeon;
};

PokedexOffline.prototype.showPokemonWithTopStats = function (poke1, poke2) {
  var self = this;
  this.getPokemonByName(poke1).then(function (poke1) {
    self.getPokemonByName(poke2).then(function(poke2) {
      console.log("los pokemon que compiten son: "
      + poke1.name + " con "+ poke1.getPokemonStats()
      + " y " 
      + poke2.name + " con "+ poke2.getPokemonStats());
        
      var ganador = self.getTopStats(poke1,poke2);
      console.log("el ganador es " + ganador.name + " con " + ganador.getPokemonStats());
    });
  });
};

module.exports = PokedexOffline;

// Ayuda:
// var pokemonRealPromise = Promise.resolve(JSON.parse(pikachu)) // -->sincrónico
 // var pokemonRealPromise = promiseResolveAsync(JSON.parse(pikachu)); // -->asincrónico