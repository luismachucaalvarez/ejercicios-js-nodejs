var _ = require('lodash');
var CLI = require('./domain/cli')
var cli = new CLI();

//Ingreso de parametros por consola
var poke1 = process.argv[2];
var poke2 = process.argv[3];



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Online
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var Pokedex = require('./domain/pokedex')
// var pokedex = new Pokedex();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Para ejecutar de manera Offline
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
var PokedexOffline = require('./domain/pokedexOffline');
var pokedex = new PokedexOffline();


//Muestra el pokemon con mayore stat (compara entre 2)
cli.showPokemonWithTopStat(poke1,poke2);

//cli.showPokemonStat(poke1);