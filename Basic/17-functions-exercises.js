/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a = 0, b = 0) {
  return a + b
}
console.log(suma(5, 52));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numMayor = function (numeross) {
  console.log(Math.max(...numeross));
}

numMayor(numeros);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = 'hola soy homero chino hola soy homero chino'

function getVocales(cadena) {
  let totalVocales = 0
  cadena = cadena.split('')
  cadena.forEach(element => {
    if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
      totalVocales++;
    }
  });
  console.log('Total vocales: ' + totalVocales);
}
getVocales(cadena)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let strings = ['cubreme!', 'oh buena idea jefe', 'asi era cuando llegue']
function upperCaseArray(customArray) {
  customArray.forEach((string, index) => {
    strings[index] = string.toUpperCase()
  })
}
upperCaseArray(strings)
console.log(strings);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  let primo = false;
  for (let i = 1; i <= numero; i++) {
    let res = numero / i;
    if (res !== 1 && res !== numero && numero % i === 0) {
      primo = false;
      break;
    } else {
      primo = true;
    }
  }
  console.log('es primo: ' + primo);
}

esPrimo(6)
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const array1 = [1, 2, 3, 'a', 'b', 'hola mundo', 'precious', 'little', 'diamond']
const array2 = [9, 8, 7, 4, 2, 1, 'a', 'triste', 'prueba', 'precious', 'little', 'diamond']

let finalArray = [];

const elementosComunes = (array1, array2) => {

  if (array1.length >= array2.length) {
    array1.forEach(element => {
      if (array2.includes(element)) { finalArray.push(element) }
    });
  } else {
    array2.forEach(element => {
      if (array1.includes(element)) {
        finalArray.push(element)
      }
    });
  }
}
elementosComunes(array1, array2)
console.log('Elementos comunes: ' + finalArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const arregloNumeros = [1, 6, 7, 9, 0, 4, 2, 57, 8, 5, 3, 2, 645, 2, 46, 7, 74];
const arregloNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Total = 0;
arregloNumeros.forEach(numero => {
  if (numero % 2 === 0) {
    Total += numero
  }
});
console.log('Suma de números pares: ' + Total);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarNumeros(conjuntoNumeros) {
  conjuntoNumeros.forEach((numero, index) => {
    conjuntoNumeros[index] = numero ** 2
  })
  console.log('Numeros elevados al cuadrado:' + conjuntoNumeros);
}
let = conjuntoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
elevarNumeros(conjuntoNumeros)


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadenaDeTexto = 'Anita Lava la Tina'
function reverseString(cadenaDeTexto) {
  cadenaDeTexto = cadenaDeTexto.toLowerCase().split(' ').reverse().join(' ')
  console.log(cadenaDeTexto);

}
reverseString(cadenaDeTexto)

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
  let res = numero;
  for (let i = numero - 1; i > 0; i--) {
    res *= i
  }
  console.log(`Factorial de ${numero} es: ${res}`);

}
factorial(3);