/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array1 = [1, 2, 3, 4, 5, 67, 8,]
let [number1, number2] = array1
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2 = [1, 2, 3, 4, 5, 67, 8,]
let [number3 = 12, number4 = 10] = array1
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let object1 = {
  name: 'a',
  lastname: 'b',
  phone: '5555645864',
  blood_type: 'o+',
  direction: {
    street: 'test a #1',
    city: 'mexico',
    contry: 'mexico',
    cp: '54785'
  }
}
let object2 = {
  shipping: false,
  deliver: 'on store',
  test: 'true'
}
let { name, lastname } = object1
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { phone: userPhone, blood_type: bloodType } = object1
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { direction: { street, city } } = object1
// 6. Usa propagación para combinar dos arrays en uno nuevo
let a = ['a', 'sdae', 'asfsfe', 'asfdgfsrf', '123', 12, 122, 211]
let b = [1, 4, 63, 6, 3, 6, 454, 6, 4, 56]

let newArray = [...a, ...b]
// 7. Usa propagación para crear una copia de un array
let copyArray = [...b]
// 8. Usa propagación para combinar dos objetos en uno nuevo
let combinedObject = { ...object1, ...object2 }
// 9. Usa propagación para crear una copia de un objeto
let copyObject = { ...object1 }

// 10. Combina desestructuración y propagación
let [combiancion] = [...array1]
