'use strict';
// # Problema para practica de bucles y arreglos.
// * Crear un minisistema para registrar asistencias, P para presentes y A para ausentes
// * pasados 30 dias, mostrar situacion final del alumno(numero t otal de presentes y ausentes)
// * solo puede tener un maximo de 10% de ausencias por semestre, si se tienen mas, aclarar que esta reprobado
let amount = prompt("Cuantos alumnos tienes?");
let studentTotal = []; 
// $ llenamos el array de los alumnos
for(let i=0;i<amount;i++){
  studentTotal[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

// $ Creamos una funcion para comenzar a pasar asistencia
const takePresence = (nombre,p) => {
  let presence = prompt(nombre);
  if(presence === "p" || presence === "P"){
    studentTotal[p][1]++;
  }
}

// $ Como se pasara lista durante el mes, agregamos ciclo for para el pase de lista
for(let i=0;i<30;i++){
  for(let student in studentTotal){
    takePresence(studentTotal[student][0],student);
  }
}

// $ Mostramos el total de asistencias y faltas por alumno
for(let student in studentTotal){
  let result = `${studentTotal[student][0]}:<br>
  ______________Asistencia: ${studentTotal[student][1]} <br>
  ______________Faltas: ${30 - parseInt(studentTotal[student][1])}`;
  if(30 - parseInt(studentTotal[student][1]) > 18){
    result += `<b style="color:red"> REPROBADO POR INASISTENCIAS</b><br><br>`;
  }else{
    result += "<br><br>";
  }
  document.write(result);
}



