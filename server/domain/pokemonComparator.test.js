var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var PokemonComparator = require('./pokemonComparator');
var pokemonComparator = new PokemonComparator();
var Pokemon = require('./pokemon')

var pikachu = new Pokemon(require('../collections/pikachu'));
var bulbasaur = new Pokemon(require('../collections/bulbasaur'));


describe('pokemonComparator', function() {
  it('getTopStat() si recibe pikachu y a bulbasaur, retorna pikachu', function() {
    expect(pokemonComparator.getTopStat(pikachu, bulbasaur)).to.equal(pikachu);
  });
  it('getTopStat() si recibe bulbasaur y a pikachu, retorna pikachu', function() {
  	expect(pokemonComparator.getTopStat(bulbasaur, pikachu)).to.equal(pikachu);
  });
});

