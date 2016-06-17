"use strict"
var CLI = require('./domain/cli');
var cli = new CLI();

//Ingreso de parametros por consola
var nombrePoke1 = process.argv[2];
var nombrePoke2 = process.argv[3];


//Muestra el pokemon con mayore stat (compara entre 2)
cli.showPokemonWithTopStat(nombrePoke1,nombrePoke2);

// Stat Total del pokemon
cli.showPokemonStat(nombrePoke1);
// Id del pokemon
cli.showPokemonId(nombrePoke1)