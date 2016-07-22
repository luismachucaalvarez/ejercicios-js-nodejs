/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++
La consulta, por default se realiza por el criterio de 
mayor stat total del pokemon.
En el caso de pasar un criterio de comparación se realiza
el analisis y comparación correspondiente.

***** Ejemplo de comparación con criterios pasados por parametro
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.name.length; })"  
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.base_experience; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.height; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.id; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.order; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.weight; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.weight; })"


**** Ejemplo de comparación por statsTotales 
node comparar pikachu bulbasaur charmander 

/+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

"use strict"
var CLI = require('./cli');
var cli = new CLI();

if (process.argv[process.argv.length-2] == "--criterio") {
	var pokemonsNames = process.argv.slice(2,-2);
	var funcionCriterio = process.argv[process.argv.length-1];
	cli.showPokemonChampionByCanon(pokemonsNames, funcionCriterio); //compara por el criterio
} else {
	var pokemonsNames = process.argv.slice(2);
	cli.showPokemonWithTopStat(pokemonsNames); //Muestra el pokemon con mayor stat 
};



