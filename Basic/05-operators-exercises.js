/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let sumar = sumar + 1;
let restar = restar - 1;
let multiplicar = multiplicar * 1
let dividir = dividir / 1
let modulo = modulo % 1
let exponente = exponente ** 1
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
sumar += 1
restar -= 1
multiplicar *= 1
dividir /= 1
modulo %= 1
exponente **= 1
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(typeof 2 == 'number');
console.log(20 < 65);
console.log(200.94 > 65);
console.log(sumar >= restar);
console.log(exponente != 24);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(null > undefined);
console.log(5 < 1);
console.log('hola' === 'prueba');
console.log(typeof restar >= 'testing'.length);
console.log(0 * 20 >= 38);

// 5. Utiliza el operador lógico and
console.log(restar > 1 && sumar > 1);

// 6. Utiliza el operador lógico or
console.log(exponente == 20 || 200 < 500);

// 7. Combina ambos operadores lógicos
console.log(sumar > 1 && restar == -1 || 20 === null);

// 8. Añade alguna negación
console.log(sumar !== null);

// 9. Utiliza el operador ternario
let trabajo = true;
trabajo ? console.log('encendemos la pc y trabajamos')
  : console.log('disfrutamos del dia');

// 10. Combina operadores aritméticos, de comparación y lógicas

console.log(15 / 24 >= 457 && typeof 'texto' != 'number' || 'random'.length === 23);
