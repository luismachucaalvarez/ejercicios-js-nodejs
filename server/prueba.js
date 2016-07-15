"use strict"
var CLI = require('./cli');
var cli = new CLI();

//Ingreso de parametros por consola
//var nombrePoke1 = process.argv[2];
//var nombrePoke2 = process.argv[3];
var pokemonsNames = process.argv.slice(2);


//Muestra el pokemon con mayor stat 
cli.showPokemonWithTopStat(pokemonsNames);

//Stat Total del pokemon
//cli.showPokemonStat(nombrePoke1);


//Id del pokemon
//cli.showPokemonId(nombrePoke1)

//cli.showPokemons(pokemonsNames); //-->muestra los pokemons 
