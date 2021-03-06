/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++
La comparación por default se realiza por el "criterio" de
mayor stat total del pokemon.
En el caso de pasar un criterio de comparación en el momento de ejecución
se realiza el análisis y comparación correspondiente.

***** Ejemplo de comparación con criterios pasados por parametro
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.name.length; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.base_experience; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.height; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.id; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.order; })"
node comparar pikachu bulbasaur charmander --criterio "(function(poke)  { return poke.weight; })"


**** Ejemplo de comparación por statsTotales
node comparar pikachu bulbasaur charmander

/+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

"use strict"
var CLI = require('./cli');
var cli = new CLI();

cli.tryToDo(function(){
  if (process.argv[process.argv.length-2] == "--criterio") {
    var pokemonsNames = process.argv.slice(2,-2);
    var criterio = process.argv[process.argv.length-1];
    try {
      return cli.showChampionPokemonByCanon(pokemonsNames, eval(criterio)); //Compara por el criterio
    } catch(error) {
      console.log("El criterio no compila.");
      process.exit(1); // cierra el programa
    }
  } else {
    var pokemonsNames = process.argv.slice(2);
    return cli.showChampionPokemonByStat(pokemonsNames); //Muestra el pokemon con mayor stat
  };
});
