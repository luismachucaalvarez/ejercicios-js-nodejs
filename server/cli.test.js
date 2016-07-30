var chai = require('chai');
var expect = chai.expect;
var CLI = require('./cli');
var cli = new CLI();

//console.log(cli.tyToDo); //es una función
//console.log(cli.showPokemonWithTopStat); //es una función


describe('cli', function() {

  describe('showPokemonWithTopStat()', function() {

    it('Si recibe a picachu dice que no puede encontrar el pokemon picachu', function(done) {
      cli.tryToDo(function() {
        return cli.showPokemonWithTopStat(["picachu","bulbasaur"]);
      }).then(function(error) {
        expect(error).to.equal("No se puede encontrar el pokemon picachu");
        done()
      });
    });

  });

});


// var expectToEqual = function(valorRecibido,valorEsperado) {
//  if (valorRecibido !== valorEsperado)
//    throw new Error("Se esperaba " + valorEsperado + " pero se obtuvo " + valorRecibido);
// }

    // it('Si recibe a bulbasaur y a picachu, retorna pikachu', function() {
    //   expect(cli.tryToDo.showPokemonWithTopStat([picachu,bulbasaur])).to.equal("No se puede encontrar el pokemon picachu");
    // });
