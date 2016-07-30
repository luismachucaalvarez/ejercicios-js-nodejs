#!/bin/bash

#Pruebas en Cli
cd server
mocha cli.test.js

#Pruebas del dominio
cd domain
mocha pokemon.test.js
mocha pokemonComparator.test.js
mocha pokedexOnline.test.js
