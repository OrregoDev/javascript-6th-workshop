// vars call
console.log('Valor de a:', a);
console.log('Valor de b:', b);
console.log('Valor de c:', c);

// functions call
console.log('Resultado de funcionDeclarada:', funcionDeclarada());
console.log('Resultado de funcionExpresada:', funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return 'Función declarada ha sido llamada.';
}

const funcionExpresada = function () {
  return 'Función expresada ha sido llamada.';
};
