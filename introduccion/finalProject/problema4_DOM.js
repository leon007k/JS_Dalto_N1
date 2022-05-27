"use strict";

// # problema para la practica de DOM

// @ Cofla ha dejado adentro de su departamento las llaves, y requiere poder abrir su depa para sacar su computadora
// @ para entregar una tarea, pero tiene que apresurarse debido a que tiene muchas faltas y si no asiste podra reprobar
// @ para ello requiere el apoyo de un cerrajero, para que le haga la llave correcta
// * Realizar un sistema que permita indicar las 20 llaves posibles con sus 4 imagenes
// * cofla podra seleccioanr cual llave desea usar
// * Una vez seleccionada enviar los datos al servidor y que otro programador se encargue de ello
const container = document.querySelector(".flex-container");

function createKey(name,model,price){
  let image = `<img class="img-key" src="llave.png" alt="key" title="key" witdh="300" height="300"/>`; 
  name = `<h2>${name}</h2>`;
  model = `<h3>${model}</h3>`;
  price = `<p>Precio: <b>$${price}</b></p>`;
  return [image,name,model,price];
}

let fragment = document.createDocumentFragment();
for(let i = 1; i <= 20; i++){
  let randomModel = Math.round(Math.random()*1000);
  let randomPrice = Math.round(Math.random()*10+50);
  let key = createKey(`llave ${i}`,`modelo ${randomModel}`, randomPrice);
  let div = document.createElement("div");
  div.addEventListener("click",()=>{ document.querySelector(".key-data").value = randomModel; });
  div.tabIndex = i;
  div.classList.add(`item-${i}`,"flex-item");
  div.innerHTML = key.join(" ");
  fragment.appendChild(div);
}

container.appendChild(fragment);




