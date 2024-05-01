// Ejercicio 11

// Ruta del archivo data.json
const url = 'data.json'; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los datos.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Habitaciones:', data.rooms);
          console.log('Tipos de Habitaciones:', data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    const userInput = prompt(
      'Ingrese el numero de habitacion a reservar: ' +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${
              roomTypes.find((type) => type.id === room.roomTypeId).name
            })`;
          })
          .join(', ')
    );
    // ... Continuar con la lógica de la app
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
  });
