/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function prueba() {
  console.log('funcion de prueba');

}
// 2. Exporta una constante
export const a = 234238
// 3. Exporta una clase
export class prueba2 {
  constructor() {
    console.log('clase de prueba');
  }
}
// 4. Importa una función
import { prueba } from "./31-modules-exercises.js";
// 5. Importa una constante
import { a } from "./31-modules-exercises.js";
// 6. Importa una clase
import { prueba2 } from "./31-modules-exercises.js";
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export function prueba5() {
  console.log('tercera funcion');

}

export const numeroID = 23434234

export default class prueba6 {
  constructor() {
    console.log('clase por defecto');
  }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import prueba5, { numeroID, prueba6 } from "./31-modules-exercises.js";
// 9. Exporta una función, una constante y una clase desde una carpeta
import prueba5, { numeroID, prueba6 } from "../../practice-dev/Js/export-import-js/index.js";

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import prueba10, { identificador, registros } from "../../practice-dev/Js/Nodejs/hello-nodejs/src/index.js";