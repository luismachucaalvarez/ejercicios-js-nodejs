var chai = require('chai');
var expect = chai.expect;
var CLI = require('./cli');
var cli = new CLI();


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

});