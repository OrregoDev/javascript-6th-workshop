// Ejercicio 6

console.log('Mensaje 1: Inmediatamente');
setTimeout(function () {
  console.log('Mensaje 2: Con timeout de 0 segundos');
}, 0);
setTimeout(function () {
  console.log('Mensaje 3: Con timeout de 1 segundo');
}, 1000);
