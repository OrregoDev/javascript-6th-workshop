// Ejercicio 5

function manejarAsincronia(callback) {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  promesa.then(() => {
    callback();
  });
}

manejarAsincronia(() => {
  console.log('¡Promesa cumplida y callback ejecutado!');
});
