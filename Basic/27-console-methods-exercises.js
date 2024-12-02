/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function checarEdad(edad) {
  edad < 18 ? console.error('No puedes acceder a esta página') : console.log('Bienvenido a la página')
}
// 2. Crea una función que utilice warn correctamente
function sumar(a = 0, b = 0) {
  if (a == 0 || b == 0) {
    console.warn('No se puede sumar 0')
  } else {
    console.log(a + b);
  }
}
// 3. Crea una función que utilice info correctamente
function saludar(nombre) {
  console.info(`Hola ${nombre}, bienvenido a la página`)
}
// 4. Utiliza table
let errorDetails = [
  { name: 'error info', code: 'X243324' }
]

console.table(errorDetails)
// 5. Utiliza group
console.group('Grupo datos')
console.log('Datos PC');
console.log('Motherboard: ASUS ROG STRIX a620-m');
console.log('Procesador: AMD ryzen 3 2200');
console.log('RAM: Corsair Vengance pro 2 X 16 GB');
console.groupEnd()

// 6. Utiliza time
console.time("Tiempo de ejecucion");
let suma = 0;
for (let i = 0; i < 1000; i++) {
  console.log(suma += i);
}
console.timeEnd("Tiempo de ejecucion")

// 7. Valida con assert si un número es positivo
const numero = 4;
console.assert(numero > 0, "El numero no es positivo")
// 8. Utiliza count
console.count('funcion ejecutada')
console.count('funcion ejecutada')
console.count('funcion ejecutada')
console.count('funcion ejecutada')
// 9. Utiliza trace
function funcA() {
  funcB()
}

function funcB() {
  console.trace("Seguimiento de la ejecución.")
}
function funcC() {
  funcA()
}
function funcD() {
  funcA()
}
funcC()
funcD()
// 10. Utiliza clear

console.clear();
