"use strict";

// # Metodos de cadena
let string = "cadena de prueba ";
let string2;
let result;

// * concat() - Junta dos o mas cadenas y retorna una nueva
// string2 = ", continuacion de cadena de prueba";
// let result =  string.concat(string2);
// console.log(result);

// ? Metodos para buscar en una cadena 
// *¨startsWith() - si una cadena comienza con los caracteres de otra cadena, retorna true sino false.
// string2 = "cadena";
// result = string.startsWith(string2);
// console.log(result);

// * endsWith() - si una cadena termina con los caracteres de otra cadena, retorna true sino false.
// string2 = "prueba";
// result = string.endsWith(string2);
// console.log(result);

// * includes() - si una cadena puede encontrarse dentro de otra cadena, retorna true sino false.
// string2 = "prueba";
// result = string.includes(string2);
// console.log(result);

// * indexOf() - devuelve el indice del primer caracter de la cadena, sino existe devuelve -1
// string2 = "prueba";
// result = string.indexOf(string2);
// console.log(result);
// console.log(string[10]);

// * lastIndexOf() - devuelve el ultimo indice del primer caracter de la cadena, sino existe devuelve -1
// string = "cadena de de prueba";
// string2 = "de";
// result = string.lastIndexOf(string2);
// console.log(result);
// console.log(string[10]);

// ? Metodos para Modificar la cadena o rellenarla
// * padStart() - rellena la cadena al principio con los caracteres deseados
// * padEnd() - Rellena la cadena al final con los caracteres deseados
// * se le debe pasar como primer valor, la longitud que tendra la cadena a rellenar
// string = "abcd";
// result = string.padStart(10,"123");
// console.log(result);
// result = string.padEnd(10,"123");
// console.log(result);

// * repeat() - devuelve la misma cadena pero repetida la cantidad indicada
// result = string.repeat(2);
// console.log(result);

// ? Metodos para modificar la cadena 
// * split() - divide la cadena como le pidamos, convirtiendo la en una array
// result = string.split(" ");
// console.log(result);
// console.log(result[0]);

// * substring() - nos devuelve un subconjunto de un objeto. Extrae caracteres desde indiceA hasta indiceB sin incluirlo
// string = "abcdefghijklmn";
// result = string.substring(0,2);
// console.log(result);
// result = string.substring(3,5);
// console.log(result);

// * toLowerCase() - convierte una cadena a miniscula
// * toUpperCase() - convierte una cadena a mayuscula
// result = string.toLocaleLowerCase();
// console.log(result);
// result = string.toUpperCase();
// console.log(result);

// * toString() - convierte un valor a cadena
// string = 123;
// result = string.toString();
// console.log(result);

// * trim() - permite eliminar espacios en blanco del principio y final de una cadena
// * trimEnd() - permite eliminar espacios en blanco al final de una cadena
// * trimStart() - permite eliminar espacios en blanco al principio de una cadena
// string = "  Cadena de prueba  ";
// console.log(string.length);
// result = string.trim();
// console.log(result.length);
// result = string.trimEnd();
// console.log(result.length)
// result = string.trimStart();
// console.log(result.length);

// # Metodos de Arrays
let arr = ["Carlos","Leonardo","Esmeralda"];

// ? Metodo para transformadores
// * pop() - elimina el ultimo elemento de un array y lo devuelve
// result = arr.pop();
// console.log(result);
// console.log(arr);

// * push - agrega un elemento al array al final de la lista
// arr.push("Yamileth");
// console.log(arr);

// * shift() - elimina el primer elemento de un array y lo devuelve
// result = arr.shift();
// console.log(result);
// console.log(arr);

// * reverse() - invierte el orden de los elementos de un array
// result = arr.reverse();
// console.log(result);

// * unshift() - agrega uno o mas elementos al inicio de un array y devuelve la nueva longitud del array
// arr.unshift("hola","mundo");
// console.log(arr);

// * sort() - ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
// arr = ["Carlos","Leonardo","Esmeralda","Andrade","Zarate"];
// console.log(arr.sort());

// * splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// arr = ["Carlos","Leonardo","Esmeralda","Andrade","Zarate"];
// arr.splice(0,2,"Carlos Leonardo");
// console.log(arr);

// ? Metodo de accesores
// * join() - une todos los elementos de un array y los convierte a cadena
// result = arr.join(",");
// console.log(result);

// * slice() devuelve un copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin
// result = arr.slice(0,2);
// console.log(arr);
// console.log(result);

// ? Metodos de repeticion
// * filter() - crea un nuevo array con todos los elementos que cumplan la condicion
//arr.filter(names => console.log(names));
// result = arr.filter(names => names.length > 6);
// console.log(result);

// * forEach() - ejecuta la funcion indicada una vez por cada elemento del array
// arr.forEach(names => console.log(names));