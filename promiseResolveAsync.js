var Promise = require("bluebird");

// Devuelve una promesa que resuelve a *valorDeResolucion*, un segundo después.
module.exports = function(valorDeResolucion) {
  var promesa = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(valorDeResolucion);
    }, 1000);
  });

  return promesa;
};