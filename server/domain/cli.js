var _ = require('lodash');
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

var PokedexOffline = require('../domain/pokedexOffline')
var pokedex = new PokedexOffline();
//var Pokemon = require('./pokemon');

var CLI = function(pokemon) {
};

CLI.prototype.showPokemonWithTopStat = function(poke1, poke2) {
  pokedex.getPokemonByName(poke1).then(function(poke1) {
    pokedex.getPokemonByName(poke2).then(function(poke2) {
      console.log("los pokemon que compiten son: "
      + poke1.name + " con "+ poke1.getPokemonStat()
      + " y "
      + poke2.name + " con "+ poke2.getPokemonStat());
        
      var ganador = pokemonInfo.getTopStat(poke1,poke2);
      console.log("el ganador es " + ganador.name + " con " + ganador.getPokemonStat());
    });
  });
};

CLI.prototype.showPokemonStat = function(pokemonName) {
  pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("el Stat del pokemon " + pokemonName + " es " + poke.getPokemonStat());
  })
};

CLI.prototype.getPokemonId = function(pokemonName) {
  pokedex.getPokemonByName(pokemonName).then(function(poke) {
    console.log("el Id del Pokemon " + pokemonName + " es "+ poke.id);
  })
};




module.exports = CLI;