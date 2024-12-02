/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'conejo', 'perico', 'tortuga']
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift('cocodrilo')
animales.push('caballo')
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3, 1)
// 4. Crea un set que almacene cinco libros
let libros = new Set(['Las Batallas del desierto', 'La divina comedia', 'El diario de ana frank', 'El sutil arte de que te importe una m*rda', 'No me hagas pensar'])
// 5. Añade dos más. Uno de ellos repetido
libros.add('Los hornos de hitler')
libros.add('El necronomicon')
// 6. Elimina uno concreto a tu elección
libros.delete('Las Batallas del desierto')
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map(
  [1, 'Enero'],
  [2, 'Febrero'],
  [3, 'Marzo'],
  [4, 'Abril'],
  [5, 'Mayo'],
  [6, 'Junio'],
  [7, 'Julio'],
  [8, 'Agosto'],
  [9, 'Septiembre'],
  [10, 'Octubre'],
  [11, 'Noviembre'],
  [12, 'Diciembre']
)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
  console.log(meses.get(5));

}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.add('verano', [[7, 'Julio'], [8, 'Agosto'], [9, 'Septiembre']])
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arreglo = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']]

let arrayToSet = new Set(arreglo)

let setToMap = new Map(arrayToSet)