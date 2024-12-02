/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Captura una excepción utilizando try-catch
try {
  5 / 0
} catch {
  console.log("no se puede dividir entre 0");
}
// 2. Captura una excepción utilizando try-catch y finally
try {
  console.log(arreglo.name);

} catch (error) {
  console.log('Se produjo un error: ', error.message);
} finally {
  console.log('fin de proceso arreglo');

}
// 3. Lanza una excepción genérica
let variable = 0;
try {
  if (variable == 0) {
    throw new Error("La variable no puede ser 0")
  }
} catch (error) {
  console.log(error.message);
}
// 4. Crea una excepción personalizada
class customException extends Error {
  constructor(message) {
    super(message)
  }
  printMessage() {
    console.log('end error message');

  }

}
// 5. Lanza una excepción personalizada
try {
  10 / 0
} catch (error) {
  console.log('error personalizado: ', error.message);
  error.printMessage()

}
// 6. Lanza varias excepciones según una lógica definida
try {
  let arreglo = [1, 2, 3, 4, 5];
  if (arreglo.length <= 5) {
    throw new Error('el arreglo es demasiado pequeño')
  } else {
    arreglo.forEach((number, index) => {

      if (typeof number !== 'number') {
        throw new TypeError('no es de tipo  numero')
      }
      if (number === 0) {
        throw new Error('no se puede dividir entre 0')
      } else {
        arreglo[index] = number / 2
      }
    })
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message)
  } else {
    console.log('ocurrió un error:', error.message);
  }
}
// 7. Captura varias excepciones en un mismo try-catch
try {
  let arreglo = [1, 2, 3, 4, 5];
  if (arreglo.length <= 5) {
    throw new Error('el arreglo es demasiado pequeño')
  } else {
    arreglo.forEach((number, index) => {
      if (number === 0) {
        throw new Error('no se puede dividir entre 0')
      } else {
        arreglo[index] = number / 2
      }
    })
  }
} catch (error) {
  console.log('ocurrió un error:', error.message);

}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let numeros = ['1.23', '3.6', '2.4', '1.3', '0']
try {

  numeros.forEach((number, index) => {
    if (number === '0') {
      throw new Error('el numero 0 no es un float')
    } else {
      numeros[index] = parseFloat(number)
    }
  })
} catch (error) {
  console.log('se produjo un error: ', error.message);

}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyError extends Error {
  constructor(message, propiedad) {
    super(message)
    this.propiedad = propiedad
  }

  printProperty() {
    console.log('propiedad: ', this.propiedad)
  }
}

try {
  let objeto = {
    a: 1,
    b: 2,
    nombre: 'prueba',
    apellido: 'doe',
    phone: '445853242',
    clientHash: 'asgenrisufh3245583fej'
  }
  if (objeto.clientHash) {
    throw new PropertyError('propiedad client hash incluida', objeto.clientHash)
  }
} catch (error) {
  console.log("Se ha producido un error personalizado:", error.message)
  error.printProperty()
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function retryOperation() {
  let maxRetries = 10;
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      // Simulación de una operación que puede fallar
      if (Math.random() < 0.5) {
        throw new Error("Operación fallida");
      }
      console.log("Operación exitosa después de", attempts, "intentos");
      return;
    } catch (error) {
      console.log("Error en la operación:", error.message);
      attempts++;
    }
  }
  console.log("Se alcanzó el máximo de intentos");
}
