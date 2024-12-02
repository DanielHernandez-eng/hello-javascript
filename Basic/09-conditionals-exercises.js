/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "daniel"
if (nombre === 'daniel') {
  console.log(nombre)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
const user = 'danv99', password = 123456;
if (user === 'danv99' && password === 123456) {
  console.log('usuario y contraseña correctos')
} else {
  console.log('usuario y contraseña incorrectos')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 10;
if (numero > 0) {
  console.log('el numero es positivo');
} else if (numero < 0) {
  console.log('el numero es negativo');
} else {
  console.log('el numero es cero');
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 24;
if (edad >= 18) {
  console.log('puede votar');
} else {
  console.log(`no puede votar, le faltan ${18 - edad} años para ser mayor de edad`);

}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
const edad2 = 24;
const etapa = edad >= 18 ? 'adulto' : 'menor';
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 7;
if (mes >= 1 && mes <= 3) {
  console.log(`la estacion del mes ${mes} es invierno`);

} else if (mes >= 4 && mes <= 6) {
  console.log(`la estacion del mes ${mes} es primavera`);

} else if (mes >= 7 && mes <= 9) {
  console.log(`la estacion del mes ${mes} es verano`);

} else if (mes >= 10 && mes <= 12) {
  console.log(`la estacion del mes ${mes} es otoño`);
} else {
  console.log(`El mes ${mes} no existe`);

}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
const lastDay = function (y, m) {
  return `El mes ${m} tiene ${new Date(y, m + 1, 0).getDate()} Dias`
}
console.log(lastDay(2024, mes));


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const idioma = 'español';

switch (idioma) {
  case 'español':
    console.log('Hola mundo');
    break;
  case 'ingles':
    console.log('Hello world');
    break;
  case 'frances':
    console.log('Bonjour le monde');
    break;
  case 'italiano':
    console.log('Ciao mondo');
  case 'portugues':
    console.log('olá mundo');

    break;
  default:
    console.log(`el idioma ${idioma} no existe o no esta disponible`);

    break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 1:
    console.log(`la estacion del mes ${mes} es invierno`);

    break;
  case 2:
    console.log(`la estacion del mes ${mes} es invierno`);

    break;
  case 3:
    console.log(`la estacion del mes ${mes} es invierno`);

    break;
  case 4:
    console.log(`la estacion del mes ${mes} es primavera`);

    break;
  case 5:
    console.log(`la estacion del mes ${mes} es primavera`);

    break;
  case 6:
    console.log(`la estacion del mes ${mes} es primavera`);

    break;
  case 7:
    console.log(`la estacion del mes ${mes} es verano`);
    break;
  case 8:
    console.log(`la estacion del mes ${mes} es verano`);
    break;
  case 9:
    console.log(`la estacion del mes ${mes} es verano`);
    break;
  case 10:
    console.log(`la estacion del mes ${mes} es otoño`);
    break;
  case 11:
    console.log(`la estacion del mes ${mes} es otoño`);
    break;
  case 12:
    console.log(`la estacion del mes ${mes} es otoño`);
    break;
  default:
    console.log(`EL mes ${mes} no existe`); break;

}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
    console.log(`El mes ${mes} tiene: 31 dias`);

    break;
  case 2:
    console.log(`El mes ${mes} tiene: 29 dias`);

    break;
  case 3:
    console.log(`El mes ${mes} tiene: 31 dias`);

    break;
  case 4:
    console.log(`El mes ${mes} tiene: 30 dias`);

    break;
  case 5:
    console.log(`El mes ${mes} tiene: 31 dias`);

    break;
  case 6:
    console.log(`El mes ${mes} tiene: 30 dias`);

    break;
  case 7:
    console.log(`El mes ${mes} tiene: 31 dias`);
    break;
  case 8:
    console.log(`El mes ${mes} tiene: 31 dias`);
    break;
  case 9:
    console.log(`El mes ${mes} tiene: 30 dias`);
    break;
  case 10:
    console.log(`El mes ${mes} tiene: 31 dias`);
    break;
  case 11:
    console.log(`El mes ${mes} tiene: 30 dias`);
    break;
  case 12:
    console.log(`El mes ${mes} tiene: 31 dias`);
    break;
  default:
    console.log(`EL mes ${mes} no existe`); break;

}