// Ejercicio 11

const url = 'data.json';
let rooms, roomTypes;
const bookings = [];

function getNumber(promptMessage, options = {}) {
  while (true) {
    const userInput = prompt(promptMessage);
    if (options?.allowedNullish && !userInput) return userInput;
    const castedInput = parseInt(userInput);
    if (!Number.isNaN(castedInput)) return castedInput;
    alert('Please enter a valid number.');
  }
}

function getDate({ promptMessage, timeString = 'T13:00:00' }) {
  const dateFormat = 'yyyy-mm-dd';
  while (true) {
    const dateInput =
      prompt(`${promptMessage} Format: ${dateFormat}`) + timeString;
    const isValidDate = !Number.isNaN(Date.parse(dateInput));
    if (isValidDate) return new Date(dateInput);
    alert('Please enter a valid date.');
  }
}

function idGenerator(initialId) {
  return function () {
    return initialId++;
  };
}
const generateId = idGenerator(1);

function showMenu() {
  let isMenuOpened = true;
  while (isMenuOpened) {
    const userOption = getNumber(
      'Welcome to our booking system! \nPlease enter the number of the action that you would like to do: \n\n1.Book \n2.Check available rooms \n3.Check my bookings \n4.Cancel booking \n5.Modify booking \n6.Exit'
    );
    switch (userOption) {
      case 6: {
        isMenuOpened = false;
        break;
      }
      case 1: {
        // 1. Ask how many guests they are
        const guestsNumber = getNumber('Enter the number of guests');
        // 2. Filter the room types that fulfill the capacity
        const possibleRoomTypes = roomTypes.filter(
          (roomType) => roomType.capacity >= guestsNumber
        );
        console.log({ possibleRoomTypes, roomTypes });
        // 3. Filter rooms that have the type needed
        const availableRooms = rooms.filter((room) => {
          const roomHasCapacity = possibleRoomTypes.some(
            (roomType) => room.roomTypeId === roomType.id
          );
          return room.availability && roomHasCapacity;
        });
        console.log(availableRooms);
        // 4. Show the client the available rooms that meet their capacity
        const availableRoomsAsString = availableRooms
          .map((room) => {
            const roomType = roomTypes.find(
              (type) => type.id === room.roomTypeId
            );
            return `\nRoom Number: ${room.number} (${roomType.name})`;
          })
          .join(', ');

        const roomNumber = getNumber(
          'Ingrese el numero de habitacion a reservar: ' +
            availableRoomsAsString
        );
        const roomToBook = rooms.find((room) => room.number === roomNumber);
        console.log(roomToBook);
        // 5. Once the user choose a valid room option, ask his name to put the booking on his behalf
        const guestName = prompt('Enter your full name please:').toLowerCase();
        // 6. Ask for the dates
        let checkInDate, checkOutDate;
        while (true) {
          const checkInDate = getDate({
            promptMessage: 'Please enter the check in date of your booking: ',
          });
          const checkOutDate = getDate({
            promptMessage: 'Please enter the check out date of your booking: ',
          });
          if (checkOutDate > checkInDate) {
            break;
          }
          alert('The check out date must be before the check in date.');
        }
        const booking = {
          id: generateId(),
          guestName,
        };
        // 6. Create booking and change room availability
        // 7. Let the user know that thet booking was succesfully made
      }
    }
  }
}
function loadAndShowData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          console.log({ response });
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
    }, 1500);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
loadAndShowData()
  .then(({ rooms: fetchedRooms, roomTypes: fetchedRoomTypes }) => {
    rooms = fetchedRooms;
    roomTypes = fetchedRoomTypes;
    showMenu();
    // Mostrar el contenido de las habitaciones después de cargar los datos

    // ... Continuar con la lógica de la app
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
  });
