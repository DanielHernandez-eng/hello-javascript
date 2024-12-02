/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = 'hola'
let cadena2 = 'mundo'
console.log(cadena1 + cadena2);

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[1]);
console.log(cadena1[3]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toLocaleLowerCase);
console.log(cadena1.toLocaleUpperCase);

// 5. Crea una cadena de texto en varias líneas
let cadena3 = `hola
esto
es 
una 
cadena
de 
varias 
lineas`
// 6. Interpola el valor de una variable en un string
let cadena4 = `esto contiene la variable: ${cadena1}`
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena5 = 'este mensaje sirve para probar funciones'
cadena5.replaceAll(' ', '-')
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena5.includes('mensaje'));
// 9. Comprueba si dos strings son iguales
console.log(cadena5 === cadena4);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena5.length == cadena4.length);