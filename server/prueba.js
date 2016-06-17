"use strict"
var CLI = require('./domain/cli');
var cli = new CLI();

//Ingreso de parametros por consola
var poke1 = process.argv[2];
var poke2 = process.argv[3];


//Muestra el pokemon con mayore stat (compara entre 2)
cli.showPokemonWithTopStat(poke1,poke2);

// Stat Total del pokemon
cli.showPokemonStat(poke1);
// Id del pokemon
cli.showPokemonId(poke1)