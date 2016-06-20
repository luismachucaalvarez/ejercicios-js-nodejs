var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Pokemon = require('./pokemon')

var pikachu = new Pokemon(require('../collections/pikachu'));
var bulbasaur = new Pokemon(require('../collections/bulbasaur'));
var kakuna = new Pokemon(require('../collections/kakuna'));


describe('pokemon', function() {

	describe('getStat()', function() {
	  it('Si recibe pikachu retorna 320', function() {
	    expect(pikachu.getStat()).to.equal(320);
	  });
	  it('Si recibe kakuna retorna 205', function() {
	    expect(kakuna.getStat()).to.equal(205);
	  });
	  it('Si recibe bulbasaur retorna 318', function() {
	  	expect(bulbasaur.getStat()).to.equal(318);
	  });
	});
	
});
