var chai = require('chai');
var expect = chai.expect;
var CLI = require('./cli');
var cli = new CLI();
var exec = require('child_process').exec;

describe('cli', function() {

  describe('showChampionPokemonByStat()', function() {

    it('Si recibe a picachu dice que no puede encontrar el pokemon picachu', function(done) {
      cli.tryToDo(function() {
        return cli.showChampionPokemonByStat(["picachu","bulbasaur"]);
      }).then(function(error) {
        expect(error).to.equal("No se puede encontrar el pokemon picachu");
        done()
      });
    });

  });

  describe('Respeta la función del criterio de comparación', function() {
    it('cuando el criterio es por mayor defensa especial', function(done) {
      var criterio = "(function(poke) { return poke.stats.filter(function(pokeStat) { return pokeStat.stat.name === 'special-defense';  })[0].base_stat;})";

      exec('node comparar.js pikachu bulbasaur charmander --criterio "' + criterio + '"', function(err, output) {
        var lines = output.split("\n");
        var lastLine = lines[lines.length - 2];
        expect(lastLine).to.equal("El ganador es: bulbasaur con: 65");
        done();
      });
    });
  });
});
