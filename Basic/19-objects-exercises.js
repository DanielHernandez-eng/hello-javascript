/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
let auto = {
  color: 'negro',
  marca: 'F1',
  año: 2012
}
// 2. Accede y muestra su valor
console.log(auto.marca);

// 3. Agrega una nueva propiedad
auto.modelo = 'F1234'
// 4. Elimina una de las 3 primeras propiedades
delete auto.color
// 5. Agrega una función e invócala
auto.run = function (velocity) {
  console.log('el auto esta corriendo a ' + velocity);

}
// 6. Itera las propiedades del objeto
for (let key in auto) {
  console.log(`${key}: ${auto[key]}`);

}
// 7. Crea un objeto anidado

let computadora = {
  motherboard: 'ASUS ROG STRIX',
  CPU: 'AMD RYZEN 5 5500X',
  RAM: {
    capacidad: '8GB',
    slots: 2,
    Marca: 'Corsair',
    Modelo: 'Vengance RGB PRO',
    Velocidad: '3600 Mhz'
  },

}

// 8. Accede y muestra el valor de las propiedades anidadas
for (let key in computadora.RAM) {
  console.log(`${key}: ${computadora.RAM[key]}`);
}
// 9. Comprueba si los dos objetos creados son iguales
if (auto === computadora) {
  console.log('los objetos son iguales');

} else {
  console.log('los objetos no son iguales');

}
// 10. Comprueba si dos propiedades diferentes son iguales
if (auto.marca === computadora.motherboard) {
  console.log('las propiedades son iguales');

} else {
  console.log('las propiedades no son iguales');
}