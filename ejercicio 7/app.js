// Ejercicio 7

const main = () => {
  alert(
    'Teniendo en cuenta el codigo de la imagen, predice el orden en que se mostraran los mensajes en consola separados por comas:'
  );

  const userAnswer = prompt('').toLowerCase();
  console.log(userAnswer);

  const realResult = [
    'inicio del script',
    'fin del script',
    'promesa resuelta',
    'primer settimeout',
    'segundo settimeout',
  ];

  const mistakes = [];

  userAnswer.split(',').forEach((prediction, index) => {
    if (prediction.trim() !== realResult[index]) {
      mistakes.push(
        `El paso ${
          index + 1
        } es incorrecto. Predicción: ${prediction}, Resultado real: ${
          realResult[index]
        }`
      );
    }
  });

  if (mistakes.length === 0) {
    alert('¡Felicitaciones! Has acertado el orden.');
  } else if (mistakes.length === 1) {
    console.log('Has fallado en un solo paso:', mistakes[0]);
  } else {
    console.log('Has fallado en varios pasos:', mistakes.join(', '));
  }
};
setTimeout(main, 200);
