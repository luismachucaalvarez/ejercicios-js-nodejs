var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Pokemon = require('./pokemon');
var Pokedex = require('./pokedex');
var pokedex = new Pokedex();

var pikachu = new Pokemon(require('../collections/pikachu'));
// var bulbasaur = new Pokemon(require('../collections/bulbasaur'));
// var kakuna = new Pokemon(require('../collections/kakuna'));


describe('pokedex', function() {

	describe('findIdByName', function() {
	  it('Si recibe pikachu retorna 25', function() {
	    expect(pokedex.findIdByName("pikachu")).to.equal(25);
	  });
	  it('Si recibe kakuna retorna 14', function() {
	    expect(pokedex.findIdByName("kakuna")).to.equal(14);
	  });
	  it('Si recibe bulbasaur retorna 1', function() {
	  	expect(pokedex.findIdByName("bulbasaur")).to.equal(1);
	  });
	});
// Falta simular el acceso a la api online
	// describe('getPokemonByName', function() {
	//   it('Si recibe pikachu retorna a pikachu', function() {
	//     expect(pokedex.getPokemonByName("pikachu")).to.equal(pikachu);
	//   });
	// });
});