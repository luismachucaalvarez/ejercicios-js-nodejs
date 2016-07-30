"use strict"
var CLI = require('./cli');
var cli = new CLI();


//Ingreso de parametros por consola
var nombrePoke1 = process.argv[2];
//var nombrePoke2 = process.argv[3];
var pokemonsNames = process.argv.slice(2);

cli.tryToDo(function() {
	return cli.showPokemonWithTopStat(pokemonsNames);
});



//cli.tryToDo(cli.showPokemonWithTopStat(["pikachu","bulbasaur"]))

//Muestra el pokemon con mayor stat
//cli.showPokemonWithTopStat(pokemonsNames);

//Stat Total del pokemon
//cli.showPokemonStat(nombrePoke1);


//Id del pokemon
//cli.showPokemonId(nombrePoke1)

//cli.showPokemons(pokemonsNames); //-->muestra los pokemons


//Muestra el pokemon con mayor stat
//cli.showPokemonWithTopStat(pokemonsNames);

//Stat Total del pokemon
//cli.showPokemonStat(nombrePoke1);


//Id del pokemon
//return cli.showPokemonId(nombrePoke1)

//cli.showPokemons(pokemonsNames); //-->muestra los pokemons
//return cli.showPokemon(nombrePoke1);


