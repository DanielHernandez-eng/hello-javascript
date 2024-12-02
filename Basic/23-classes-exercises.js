/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades
class Clase1 {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  static restar() {
    return this.a - this.b
  }
}
let clase1 = new Clase1(1, 2)
// 2. Añade un método a la clase que utilice las propiedades
class Clase2 {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  sumar() {
    return this.a + this.b
  }

}
let clase2 = new Clase2(1, 2)
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(clase2.a, clase2.b);
clase2.sumar()

// 4. Añade un método estático a la primera clase
class Clase3 {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  static restar() {
    return this.a - this.b
  }
}
// 5. Haz uso del método estático
let clase3 = new Clase3(1, 5)
clase3.restar()
// 6. Crea una clase que haga uso de herencia
class Clase4 extends Clase1 {
  multiplicar() {
    return this.a * this.b
  }
}
// 7. Crea una clase que haga uso de getters y setters
class Clase5 {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  getValues() {
    return { a: this.a, b: this.b }
  }

  setValues(a, b) {
    this.a = a
    this.b = b
  }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Clase5 {
  #a
  #b
  constructor(a, b) {
    this.#a = a
    this.#b = b
  }

  getValues() {
    return { a: this.#a, b: this.#b }
  }

  setValues(a, b) {
    this.#a = a
    this.#b = b
  }
}
// 9. Utiliza los get y set y muestra sus valores
let clase5 = new Clase5(1, 6)
console.log(clase5.getValues);
clase5.setValues(6, 5)

// 10. Sobrescribe un método de una clase que utilice herencia 

class Clase6 extends Clase2 {
  sumar() {

    let suma = 0
    suma = this.a + this.b
    return suma
  }
}