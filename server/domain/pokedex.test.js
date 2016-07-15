var chai = require('chai');
var expect = chai.expect;
var Pokedex = require('./pokedex');
var pokedex = new Pokedex();

describe('Pokedex', function() {

	describe('findIdByName', function() {
		it('Si recibe pikachu retorna 25', function() {
			expect(pokedex.findIdByName("pikachu")).to.equal(25);
		});
		it('Si recibe kakuna retorna 14', function() {
			expect(pokedex.findIdByName("kakuna")).to.equal(14);
		});
		it('Si recibe null retorna null', function() {
			expect(pokedex.findIdByName(null)).to.equal(null);
		});

	});

});