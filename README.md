# Ejercicio

Hacer una solución que pueda comparar dos pokemon y devolver el que tenga más **estadística total**.

Decimos que la **estadística total** es la **suma** de cada una de sus *estadísticas particulares* (ataque, velocidad, ataque especial, defensa especial, vida, etc).

## Requerimientos:
- Usar un repo git.
- Usar node y request-promise. Ver anexo 1.
- Dados dos **nombres de pokemon**, debería mostrar 1) el nombre del mejor 2) la **estadística total** de cada uno. Ejemplo:
```
Pikachu: 400
Charmander: 600

El ganador es Charmander.
```

- La forma de uso será:
```
node comparar.js pikachu charmander
```
y deberá mostrar en pantalla al mejor. Ver anexo 2.

- Encapsular en algún lado el comportamiento de **pedir** los pokemon a la PokeApi.
- Dividir las responsabilidades en clases, y en lo posible una clase por archivo. Ver anexo 3.

## Anexo 1:
```
var request = require("request-promise");

var pokeapiUrl = "http://pokeapi.co/api/v2"

request
  .get(pokeapiUrl + "/pokemon/25")
  .then(function(json) {
    var pikachu = JSON.parse(json);
    console.log(pikachu.moves);
  });
```

## Anexo 2:
Para obtener los argumentos del programa se puede usar `process.argv` que es una lista de strings. Recordar que el primero siempre será el path a `node` y el segundo siempre la ruta al script (`comparador.js`), por lo que los datos útiles comenzarán en la tercer posición de la lista (o sea, en el índice 2).

## Anexo 3
Si tengo un archivo2.js en la misma carpeta, puedo usar `require("./archivo2")` para incluirlo.

request
  .get(pokeapiUrl + "/pokemon/25")
  .then(function(json) {
    var pikachu = JSON.parse(json);
    console.log(pikachu.moves);
  });
Anexo 2:

Para obtener los argumentos del programa se puede usar process.argv que es una lista de strings. Recordar que el primero siempre será el path a node y el segundo siempre la ruta al script (comparador.js), por lo que los datos útiles comenzarán en la tercer posición de la lista (o sea, en el índice 2).

Anexo 3

Si tengo un archivo2.js en la misma carpeta, puedo usar require("./archivo2") para incluirlo.
