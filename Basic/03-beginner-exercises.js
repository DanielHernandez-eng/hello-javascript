/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//mi primer comentario
// 2. Escribe un comentario en varias líneas
/**
 * este
 * es
 * un
 * comentario
 * de
 * varias
 * lineas
 */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = 'hola'

let numeroEntero = 2

let numeroDecimal = 3.234

let numeroOctal = 7

let booleano = true

let indefinido = undefined

let nulo = null

let noEsNumero = NaN

let miSimbolo = Symbol('simbolo de prueba')

let EnteroGigante = 1234567890098976543265278968147387508324n

// 4. Imprime por consola el valor de todas las variables
console.log(cadena);
console.log(numeroEntero);
console.log(numeroDecimal);
console.log(booleano);
console.log(indefinido);
console.log(nulo);
console.log(noEsNumero);
console.log(miSimbolo);
console.log(EnteroGigante);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadena);
console.log(typeof numeroEntero);
console.log(typeof numeroDecimal);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof noEsNumero);
console.log(typeof miSimbolo);
console.log(typeof EnteroGigante);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = 'hola mundo'
noEsNumero = 99
numeroDecimal = 3.1416
booleano = false
miSimbolo = Symbol('numero simbolo')
EnteroGigante = BigInt(12331231436456742345234537465)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena = 123
noEsNumero = 'a'
numeroDecimal = true
booleano = Symbol('simboly123')
miSimbolo = BigInt(12331231436456742345234537465234242)
EnteroGigante = 23

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cade2na = 'hola'

const nume2roEntero = 2

const nume2roDecimal = 3.234

const nume2roOctal = 8

const bool2eano = true

const inde2finido = undefined

const nulo2 = null

const noEs2Numero = NaN

const miSi2mbolo = Symbol('simbolo de prueba')

const Ente2roGigante = 1234567890098976543265278968147387508324n


// 9. A continuación, modifica los valores de las constantes

// const cade2na = 'hola'

// const nume2roEntero = 2

// const nume2roDecimal = 3.234

// const nume2roOctal = 7

// const bool2eano = true

// const inde2finido = undefined

// const nulo2 = null

// const noEs2Numero = NaN

// const miSi2mbolo = Symbol('simbolo de prueba')

// const Ente2roGigante = 1234567890098976543265278968147387508324n


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse