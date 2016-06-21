var chai = require('chai');
var expect = chai.expect; 
var Pokemon = require('./pokemon')

var pikachu = new Pokemon(require('../collections/pikachu'));
var bulbasaur = new Pokemon(require('../collections/bulbasaur'));
var kakuna = new Pokemon(require('../collections/kakuna'));


describe('Pokemon', function() {

	describe('getStat()', function() {
	  it('Recibe pikachu retorna 320', function() {
	    expect(pikachu.getStat()).to.equal(320);
	  });
	  it('Recibe kakuna retorna 205', function() {
	    expect(kakuna.getStat()).to.equal(205);
	  });
	  it('Recibe bulbasaur retorna 318', function() {
	  	expect(bulbasaur.getStat()).to.equal(318);
	  });
	});
	
});
