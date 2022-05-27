"use strict";

// # Problema 3 para practica de metodos

// @ Cofla ya esta terminando el primer semestre del primer cilo, la tarea que debe realizar es mucho mas avanzada
// @ de la que tenia antes, ademas de sumar, resta, multiplicacion y division ahora tambien necesita calcular potencias,
// @ raices cuadradas y cubicas.

// class Calculator{
//   constructor(){
//   }

//   plus(num1,num2) {
//     return parseInt(num1) + parseInt(num2);
//   }

//   minus(num1,num2) {
//     return parseInt(num1) - parseInt(num2);
//   }

//   times(num1,num2) {
//     return parseInt(num1) * parseInt(num2);
//   }

//   dividedBy(num1,num2) {
//     return parseInt(num1) / parseInt(num2);
//   }

//   exponential(num1,exp){
//     return parseInt(num1) ** parseInt(exp);
//   }

//   squareRoot(num){
//     return Math.sqrt(num);
//   }

//   cubreRoot(num){
//     return Math.cbrt(num);
//   }
// }

// const calculator = new Calculator();
// alert("A continuacion elige la operacion que deseas realizar");
// let  operation = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: exponencial, 6: raiz cuadrada, 7: raiz cubica");
// let x = prompt("Ingresa el primer valor");
// let result,y;
// if(operation != "5" && operation != "6" && operation != "7"){
//   y = prompt("Ingresa el segundo valor");
// }

// switch (operation) {
//   case "1":
//     result = calculator.plus(parseInt(x),parseInt(y));
//     document.write(`${x} + ${y} = ${result}`);
//   break;
//   case "2":
//     result = calculator.minus(parseInt(x),parseInt(y));
//     document.write(`${x} - ${y} = ${result}`);
//   break;
//   case "3":
//     result = calculator.times(parseInt(x),parseInt(y));
//     document.write(`${x} x ${y} = ${result}`);
//   break;
//   case "4":
//     result = calculator.dividedBy(parseInt(x),parseInt(y));
//     document.write(`${x} / ${y} = ${result}`);
//   break;
//   case "5":
//     let exponent = parseInt(prompt("Ingresa el valor exponencial"));
//     result = calculator.exponential(x,exponent);
//     document.write(`${x}^${exponent} = ${result}`);
//   break;
//   case "6":
//     result = calculator.squareRoot(x);
//     document.write(`La raiz cuadrada de ${x} es: ${result}`);
//   break;
//   case "7":
//     result = calculator.cubreRoot(x);
//     document.write(`La raiz cubica de ${x} es: ${result}`);
// }

// # Problema 2
// @ La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos
// @ que se anotaron en dichas clases, pero neceistamos ver esto ordenadamente. 
// * Crear una funcion que al pasarle como parametro la matera, nos devuelva: profesor asignado y nombre de los alumnos
// * crear una funcion qie nos diga en cuantas clases esta Cofla
// * nombrar las clases en las que esta y los profesores de cada una

// const searchMatter = (matter) => {
//   let matters = {
//     fisica: ["Efrain","Carlos","Leonardo","Esmeralda","Gimena"],
//     programacion: ["Luis","Carlos","Leonardo","Esmeralda","Roberto"],
//     matematicas: ["Miriam","Carlos","Gimena","Esmeralda","Maribel"],
//     quimica: ["Karen","Carlos","Gonzalo","Esmeralda","Gimena"]
//   }

//   if(matters[matter] !== undefined){
//     return [matters[matter],matter,matters];
//   }else{
//     return matters;
//   }
// };

// function showInfo(matter){
//   let information = searchMatter(matter);

//   if(information !== false){
//     let teacher = information[0][0];
//     let students = information[0];
//     students.shift();
//     return `El profesor de la materia de <b>${information[1]}</b> es: <b>${teacher}</b> <br>
//                   Los alumnos son: <b>${students}</b><br><br>`;
//   }
// }

// function searchStudent(student){
//   let information = searchMatter(student);
//   let total = 0;
//   let classArr = [];
//   for(let info in information){
//     if(information[info].includes(student)){
//       total++;
//       classArr.push(" " + info);
//     }
//   }
//   return `el alumno <b>${student}</b> esta en <b>${total}</b> materias: <b>${classArr}</b><br>`;
// }

// document.write(showInfo("fisica"));
// document.write(showInfo("programacion"));
// document.write(showInfo("matematicas"));
// document.write(showInfo("quimica"));
// document.write(searchStudent("Carlos"));
// document.write(searchStudent("Leonardo"));

// # problema 3
// @ Cofla ya vio las 12 materias y se decidio en cual se va a inscribir asi que en tres dias lo hara
// @ el problema es que se rompio el sistema de inscripciónes
// * Crear una funcion para preguntarle a cofla en que materia se quiere inscribir
// * si ya hay 20 alumnos anotados en la materia negarle la inscripción
// * si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista de alumnos

function inscription(){
  let studentName = prompt("Ingresa tu nombre");
  let matter = prompt("Ingresa nombre de la materia a la cual te vas a inscribir");

  let matters = {
    fisica: ["Efrain","Carlos","Leonardo","Esmeralda","Gimena","Gonzalo"],
    programacion: ["Luis","Carlos","Leonardo","Esmeralda","Roberto","Jorge","Osvaldo"],
    matematicas: ["Miriam","Carlos","Gimena","Esmeralda","Maribel","Leonardo"],
    quimica: ["Karen","Carlos","Gonzalo","Esmeralda","Gimena","Francisco"]
  }

  if(matters[matter] != undefined){
    debugger
    if(matters[matter].length < 7){
      matters[matter].push(studentName);
      let teacher = matters[matter][0];
      let students = matters[matter];
      students.shift();
      return `Has sido inscrito exitosamente a la materia de ${matter}<br>
              Tu maestro es <b>${teacher}</b><br>
              el grupo de alumnos son: <b>${students}<b>`;
    }else{
      return "Esta materia ya tiene cupo lleno";
    }
  }else{
    return `Materias existentes para inscribirte ${matters}`;
  }

}

document.write(inscription());

