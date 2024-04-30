// Ejercicio 8

function createCounter(currentValue) {
  return function () {
    return currentValue++;
  };
}

let increaseCounter = createCounter(1);
while (true) {
  let option = confirm('¿Deseas incrementar el contador?');
  if (option) {
    let newValue = increaseCounter();
    alert('El valor actual del contador es: ' + newValue);
  } else {
    break;
  }
}
