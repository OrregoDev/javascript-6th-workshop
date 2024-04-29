// Ejercicio 3

function crearSumador(number) {
  return function (suma) {
    return number + suma;
  };
}

let sumarCinco = crearSumador(5);
console.log(sumarCinco(3));

let sumarDiez = crearSumador(10);
console.log(sumarDiez(3));

let sumarQuince = crearSumador(15);
console.log(sumarQuince(3));
