/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
suma = 0;
i = 1;
while (i <= 100) {
  suma += i
  i++;
}
console.log('Resultado de la suma: ' + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 1;
do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++
} while (i <= 50)
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ['juan', 'daniel', 'manuel', 'cristian', 'adrian', 'alan']

for (let nombre of nombres) {
  console.log(nombre);

}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const cadena = 'hola esto es una cadena de texto';
let totalVocales = 0;
for (let letra of cadena) {
  switch (letra) {
    case 'a':
      totalVocales++;
      break;
    case 'e':
      totalVocales++;
      break;
    case 'i':
      totalVocales++;
      break;
    case 'o':
      totalVocales++;
      break;
    case 'u':
      totalVocales++;
      break;
  }
}
console.log('Total de vocales ' + totalVocales);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 3, 4, 2, 1, 4, 3, 7]
multiplicacion = 1;
for (let numero of numeros) {
  multiplicacion *= numero
}
console.log('Numeros multiplicados: ' + multiplicacion);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto
const cadena2 = 'hola'
let cadenaInvertida = '';
for (let i = 1; i <= cadena2.length; i++) {
  cadenaInvertida += cadena2[cadena2.length - i]
}
console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let serieFibonacci = [0, 1]
for (let i = 2; i < 10; i++) {
  serieFibonacci[i] = serieFibonacci[i - 2] + serieFibonacci[i - 1]
}
console.log(serieFibonacci);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeros2 = [10, 9, 3, 8, 57, 5, 3, 495, 10, 85, 37, 27, 4, 6, 7, 8, 9]
let newArray = []

for (let numero of numeros2) {
  if (numero > 10) {
    newArray.push(numero);
  }
}
console.log(newArray);
