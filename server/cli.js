//CLI - Command-line interface --> Permite mostrar por consola los resultados de las
//llamadas por consola.
// Métodos:
// showPokemonStat(pokemonName) // Muestra el Stat de un pokemon
// showPokemonId(pokemonName) // Muestra el Id de un Pokemon
// showPokemons(nombresDePokemon) // Muestra el Pokemon correspondiente al nombre ingresado - usado para debug
// showPokemonChampionByCanon(nombresDePokemon,funcionDeCriterio) //Muestra el pokemon ganador según un criterio de comparación
// showPokemonWithTopStat(nombresDePokemon) // Muestra el pokemon con mayor stat


"use strict"
var PokemonComparator = require('./domain/pokemonComparator');
var pokemonComparator = new PokemonComparator();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
var PokedexOnline = require('./domain/pokedexOnline')
var pokedex = new PokedexOnline();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var PokedexOffline = require('./domain/pokedexOffline');
// var pokedex = new PokedexOffline();

var CLI = function() {
};

// Muestra el stat de un pokemon
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

// Se utiliza solo para mostrar los pokemons a modo debug
CLI.prototype.showPokemons = function(nombresDePokemon) {
  return pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons) {
    console.log(pokemons);
  });
};

// Muestra el campeón según el criterio de comparación ingresado
CLI.prototype.showChampionPokemonByCanon = function(nombresDePokemon, criterio){
  return pokedex.getPokemonsByNames(nombresDePokemon).then(function(pokemons){

    var invocarCriterio = function(poke) {
      try {
        return criterio(poke);
      } catch (e) {
        throw new Error("El criterio rompió: " + e + ".");
      }
    }

    var pokemonsParticipantes = pokemons.map(function(poke) {
      return poke.name + " con " + invocarCriterio(poke);
    }).join("\n");
    console.log("Los pokemon que compiten son:");
    console.log(pokemonsParticipantes);

    var ganador = pokemonComparator.getByCanon(pokemons, criterio);
    console.log("El ganador es: " + ganador.name + " con: " + invocarCriterio(ganador));
  });
};

// Muestra el pokemon con mayor stat total
CLI.prototype.showChampionPokemonByStat = function(nombresDePokemon) {
  return this.showChampionPokemonByCanon(nombresDePokemon, function(poke) { return poke.getStat(); });
};

CLI.prototype.tryToDo = function(unaFuncion) {
  return unaFuncion().catch(function(error){
    console.log(error);
    return error;
  });
};

module.exports = CLI;
