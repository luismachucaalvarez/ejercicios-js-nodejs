var chai = require('chai');
var expect = chai.expect;
var Pokedex = require('./pokedex');
var pokedex = new Pokedex();

describe('Pokedex', function() {

	describe('findIdByName', function() {
	  it('Recibe pikachu retorna 25', function() {
	    expect(pokedex.findIdByName("pikachu")).to.equal(25);
	  });
	  it('Recibe kakuna retorna 14', function() {
	    expect(pokedex.findIdByName("kakuna")).to.equal(14);
	  });
	  it('Recibe vacio retorna null', function() {
	  	expect(pokedex.findIdByName(null)).to.equal(null);
	  });
	  
	});

});