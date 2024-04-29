// Ejercicio 1

// Primera pregunta
const main = () => {
  while (true) {
    alert(
      'Teniendo en cuenta el codigo de la imagen, responde las siguientes preguntas:'
    );
    const firstQuestion = confirm(
      'La variable "globalVariable" se puede acceder desde cualquier lugar del codigo? Pulsa OK si la afirmacion anterior es correcta'
    );

    if (firstQuestion) {
      alert('Correcto, has entendido el concepto de variable global');
    } else {
      alert(
        'Incorrecto, al ser una variable global el alcance de la misma es de todo el programa'
      );
    }

    const secondQuestion = confirm(
      'La variable "functionVariable" solo se puede acceder dentro de la funcion? Pulsa OK si la afirmacion anterior es correcta'
    );

    if (secondQuestion) {
      alert('Correcto, has entendido el concepto de variable local');
    } else {
      alert(
        'Incorrecto, al ser una variable local el alcance de la misma es dentro de la misma funcion o un bloque dentro de la misma'
      );
    }

    const thirdQuestion = confirm(
      'La variable "blockVariable" se puede acceder desde otras partes del codigo? Pulsa OK si la afirmacion anterior es correcta'
    );

    if (thirdQuestion == 1) {
      alert('Correcto, has entendido el concepto de variable de bloque');
    } else {
      alert(
        'incorrecto, al ser una variable de bloque solo puede ser accesada dentro del mismo bloque'
      );
    }

    if (firstQuestion && secondQuestion && thirdQuestion) {
      alert('Felicidades, tienes un conocimineto solido en scope');
    } else {
      alert('Te aconsejo que repases sobre variables y vuelvas a intentarlo');
    }
  }
};
setTimeout(main, 200);
