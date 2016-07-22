"use strict"
var CLI = require('./cli');
var cli = new CLI();

//Ingreso de parametros por consola
//var nombrePoke1 = process.argv[2];
//var nombrePoke2 = process.argv[3];
var pokemonsNames = process.argv.slice(2);
//var pokemonsNames = process.argv.slice(2,-2);
//var funcionCriterio = process.argv[process.argv.length-1];
//var funcionCriterio = process.argv[process.argv.length-1];

// Debug de los parámetros.
// console.log("los pokemons son: ", pokemonsNames);
// console.log("La funcion a evaluar es: ", funcionCriterio);
// console.log("el total de parametros es " + process.argv.length);
// console.log("quedaria la funcion: " , process.argv[6]);
// console.log("quedaria la funcion: " , process.argv[process.argv.length-1]);

//Llamada a funciones
//Muestra el pokemon con mayor stat 
cli.showPokemonWithTopStat(pokemonsNames);

//cli.showPokemonChampionByCanon(pokemonsNames,eval(funcionCriterio));

//cli.showPokemonChampionByCanon(pokemonsNames, funcionCriterio);

//Stat Total del pokemon
//cli.showPokemonStat(nombrePoke1);

//Id del pokemon
//cli.showPokemonId(nombrePoke1)

//cli.showPokemons(pokemonsNames); //-->muestra los pokemons 
