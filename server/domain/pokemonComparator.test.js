var chai = require('chai');
var expect = chai.expect;
var PokemonComparator = require('./pokemonComparator');
var pokemonComparator = new PokemonComparator();
var Pokemon = require('./pokemon')

var pikachu = new Pokemon(require('../collections/pikachu'));
var bulbasaur = new Pokemon(require('../collections/bulbasaur'));
var charmander = new Pokemon(require('../collections/charmander'));
var kakuna = new Pokemon(require('../collections/kakuna'));
var dragonite = new Pokemon(require('../collections/dragonite'));


describe('PokemonComparator', function() {

  describe('getTopStat()', function() {
    it('Si recibe a pikachu y a bulbasaur, retorna pikachu', function() {
      expect(pokemonComparator.getTopStat([pikachu, bulbasaur])).to.equal(pikachu);
    });
    it('Si recibe a bulbasaur y a pikachu, retorna pikachu', function() {
      expect(pokemonComparator.getTopStat([bulbasaur, pikachu])).to.equal(pikachu);
    });
  });

  describe('getByCanon', function() {
    it('Si recibe a bulbasaur, charmander y compara por mayor defensa especial, retorna bulbasaur', function() {
      expect(pokemonComparator.getByCanon([bulbasaur, charmander], function(poke) {
        return poke.stats.filter(function(pokeStat) {
          return pokeStat.stat.name === 'special-defense';
        })[0].base_stat;
      })).to.equal(bulbasaur);

    });

    it('Si recibe a bulbasaur, charmander y compara por mayor ataque, retorna charmander', function() {
      expect(pokemonComparator.getByCanon([charmander, bulbasaur], function(poke) {
        return poke.stats.filter(function(pokeStat) {
         return pokeStat.stat.name === 'attack';
        })[0].base_stat;
      })).to.equal(charmander);
    });

    it('Si recibe a kakuna, charmander, dragonite y gana el de tipo dragón, retorna dragonite', function () {
      expect(pokemonComparator.getByCanon([kakuna, charmander, dragonite], function (poke) {
        return poke.types.filter(function (tipo) {
          return tipo.type.name ==='dragon';
        }).length;
      })).to.equal(dragonite);
    });

    it('Si recibe a bulbasaur, pikachu y charmander y compara por la experiencia base, gana pikachu', function() {
      expect(pokemonComparator.getByCanon([bulbasaur, pikachu, charmander], function(poke) {
        return poke.base_experience;
      })).to.equal(pikachu);
    })

    it('Si recive a Kakuna y dragonite y compara por mayor cantidad de habilidades, retorna dragonite', function() {
      expect(pokemonComparator.getByCanon([kakuna, dragonite], function(pokemon) {
        return pokemon.abilities.length
      })).equal(dragonite);
    })

  });
});

