var chai = require('chai');
var expect = chai.expect; 
var PokemonComparator = require('./pokemonComparator');
var pokemonComparator = new PokemonComparator();
var Pokemon = require('./pokemon')

var pikachu = new Pokemon(require('../collections/pikachu'));
var bulbasaur = new Pokemon(require('../collections/bulbasaur'));


describe('PokemonComparator', function() {

	describe('getTopStat()', function() {
	  it('Si recibe a pikachu y a bulbasaur, retorna pikachu', function() {
	    expect(pokemonComparator.getTopStat([pikachu, bulbasaur])).to.equal(pikachu);
	  });
	  it('Si recibe a bulbasaur y a pikachu, retorna pikachu', function() {
	  	expect(pokemonComparator.getTopStat([bulbasaur, pikachu])).to.equal(pikachu);
	  });
	});

});

