// Ejercicio 1

// Primera pregunta
const main = () => {
  while (true) {
    alert(
      'Teniendo en cuenta el codigo de la imagen, responde las siguientes preguntas:'
    );
    const firstQuestion = confirm(
      'La variable a declarada con var es elevada al principio de su ámbito. Pulsa OK si la afirmacion anterior es correcta'
    );

    if (firstQuestion) {
      alert('¡Correcto!');
    } else {
      alert(
        '¡Incorrecto! las variables declaradas con var son elevadas al principio de su ámbito, pero se inicializan con undefined hasta la línea donde realmente se declaran'
      );
    }

    const secondQuestion = confirm(
      'Se puede acceder a la variable b declarada con let antes de su declaración dentro del mismo ámbito de bloque. Pulsa OK si la afirmacion anterior es correcta'
    );

    if (secondQuestion) {
      alert(
        'Incorrecto, las variables declaradas con let son elevadas pero permanecen en una zona muerta temporal hasta que se inicializan. Intentar acceder a ellas antes de su declaración resultará en un ReferenceError'
      );
    } else {
      alert('¡Correcto!');
    }

    const thirdQuestion = confirm(
      'Es posible redeclarar la variable c declarada con const dentro del mismo ámbito. Pulsa OK si la afirmacion anterior es correcta'
    );

    if (thirdQuestion) {
      alert(
        'Incorrecto, las variables declaradas con const no pueden ser redeclaradas dentro del mismo ámbito. Intentar hacerlo resultará en un SyntaxError'
      );
    } else {
      alert('¡Correcto!');
    }

    if (firstQuestion && !secondQuestion && !thirdQuestion) {
      alert('Felicidades, tienes un conocimineto solido en Hoisting');
    } else {
      alert('Te aconsejo que repases sobre Hoisting y vuelvas a intentarlo');
    }
  }
};
setTimeout(main, 200);
