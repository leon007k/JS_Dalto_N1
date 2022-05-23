'use strict';

// # Uso del bucle for/in y for/of
let animals = ["gato","perro","cotorro"];
// * Este nos devolvera la posicion que toma en el array
// * Para que nos devuelva el contenido se tiene que hacer animals[animal]
for(let animal in animals){
  document.write(animals[animal] + "<br>");
}

document.write("<br>");

// * Este nos devuelve el contenido del array
for(let animal of animals){
  document.write(animal + "<br>");
}