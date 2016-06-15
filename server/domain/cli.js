"use strict"
var Pokemon = require('./pokemon')
var pokemon = new Pokemon();
var PokemonInfo = require('./pokemonInfo');
var pokemonInfo = new PokemonInfo();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var Pokedex = require('./domain/pokedex')
// var pokedex = new Pokedex();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

var PokedexOffline = require('../domain/pokedexOffline');
var pokedex = new PokedexOffline();

var CLI = function(pokemon) {
};

//Muestra el pokemon con mayore stat (compara entre 2)
CLI.prototype.showPokemonWithTopStat = function(poke1, poke2) {
  pokedex.getPokemonByName(poke1).then(function(poke1) {
    pokedex.getPokemonByName(poke2).then(function(poke2) {
      console.log("Los pokemon que compiten son: "
      + poke1.name + " con "+ poke1.getPokemonStat()
      + " y "
      + poke2.name + " con "+ poke2.getPokemonStat());
        
      var ganador = pokemonInfo.getTopStat(poke1,poke2);
      console.log("El ganador es " + ganador.name + " con: " + ganador.getPokemonStat());
    });
  });
};

// Stat Total del pokemon
CLI.prototype.showPokemonStat = function(pokemonName) {
  pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("El Stat del pokemon " + pokemonName + " es: " + poke.getPokemonStat());
  });
};

// Id del pokemon -- en este caso puede parecer redundante, dado que pokedex tiene una función similar, pero es la consulta
// dentro del array reducido de la pokedex
CLI.prototype.showPokemonId = function(pokemonName) {
  pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("El Id del Pokemon " + pokemonName + " es: "+ poke.id);
  });
};

module.exports = CLI;