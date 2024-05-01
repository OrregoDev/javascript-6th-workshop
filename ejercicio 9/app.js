// Ejercicio 9

function executeAfterInterval(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Este mensaje se mustra despues de ${seconds} segundos`);
      resolve();
    }, seconds * 1000);
  });
}

let seconds = parseInt(
  prompt(
    'Ingresa el numero de segundos despues de los cuales se mostrara el mensaje'
  )
);

executeAfterInterval(seconds)
  .then(() => {
    console.log('Accion completada');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function loadData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
const url = 'https://jsonplaceholder.typicode.com/posts';

loadData(url);
