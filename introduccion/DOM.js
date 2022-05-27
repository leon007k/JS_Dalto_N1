// # uso del DOM

// ? Document - Metodos de seleccion de elementos
// * getElementById() - Selecciona un elemento por ID
// * getElementsByTagName - Selecciona todos los elementos qe coincidan con el nombre de la etiqueta especificada
// * getSelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
// * querySelectorAll() - Devuelve todos los elementos que concidan con el grupo especificado de selectores

// ? Metodos para definir, obtener y eliminar valores de atributos
// let range = document.querySelector(".rangoEtario");
// * setAttribute - Modifica el valor de un atributo
// document.setAttribute("type","color");
// * getAttribute() -Obtiene el valor de un atributo
// document.write(rango.getAttribute("type"));
// * removeAttribute() - Remueve el valor de un atributo
// rango.removeAttribute("type")

// ? Atributos de inputs modificables directamente
// * todos estos se pueden modificar sin necesidad de hacer uso del metodo setAtribbute u otro
// className, value, type, accept, form, minlength, placeholder, required
// rango.value 
// rango.type = "color"

// ? clases, classlist y Metodos de classList
// * add() - añade una clase
// rango.ClassList.add("prueba");
// * remove() - remueve una clase
// rango.classList.remove("prueba");
// * item() - devuelve la clase del indice especificado, esto retorna la clase seleccionada
// rango.classList.item(0);
// * contains() - verifica si ese elemento posee o no, la clase especificada, esto retonar true o false
// rango.classList.contains("prueba");
// * replace() - reemplaza una clase por otra
// rango.classList.replace("prueba","reemplazo");
// * toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina
// * si agregamos true, siempre la agregara. Si agregamos false, siempre la quitara
// rango.classList.toggle("prueba",true);

// ? obtención y modificación de elementos
// * textContent - devuelve el texto de cualquier nodo
// rango.textContent;
// * innerHTML - devuelve el contenido html de un elemento
// rango.innerHTML;
// * outerHTML - devuelve el codigo html completo del elemento
// rango.outerHTML;

// ? Creacion de elementos
// * createElement() - crea un elemento HTML especificado por su tagName
let container = document.querySelector(".container");
// let list = document.createElement("li");
// * createTextNode() - crea un nuevo nodo de texto
// let textList = document.createTextNode("primer elemento de la lista");
// * appendChild() - Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado
// container.appendChild(list);
// list.appendChild(textList);
// * CreateDocumentFragment() - Crea un nuevo nodo vacio, dentro del cual un nodo del DOM puede ser adicionado
// let fragment = document.createDocumentFragment();
// for(let i=1; i <= 5; i++){
//   list = document.createElement("li");
//   list.innerHTML = `este es el texto ${i}`;
//   fragment.appendChild(list);
// }
// container.appendChild(fragment);

// ? Obtención y modificación de hijos
// * firstChild
// * lastChild
// * firstElementChild - Devuelve el primer elemento HTML dentro de un nodo padre
// * lastElementChild - devuelve el ultimo elemento HTML dentro de un nodo padre
// * childNodes
// * children - devuelve todos los hijos pero elementos(HTML)

// ? Metodos de hijos
// * replaceChild() - reemplaza un nodo hijo del elemento especifico por otro
// let text = document.createElement("p");
// let title = document.createElement("h1");
// let h1_old = document.querySelector(".h1");
// text.innerHTML = "Parrafo";
// title.innerHTML = "Titulo";
// title.classList.add("h1");
// container.replaceChild(title,h1_old);
// * removeChild() - elimina un nodo hijo del DOM y puede devolver el nodo eliminado
// let h2 = document.querySelector(".h2");
// container.removeChild(h2);
// * hasChildNodes() - devuelve un valor booleno indicando si el nodo actual tiene nodos hijos o no

// ? propiedades de parents
// * parentElement - devuelve el nodo padre del DOM element, o null, si el nodo no tiene padre o si no es un element DOM
// console.log(title.parentElement);
// * parentNode - devuelve el padre del nodo especificado en el arbol

// ? Propiedades de siblings (Hermanos)
// * nextSibling - devuelve el siguiente nodo con respecto al indicado en la lista de nodos a la que este pertenece 
// * previousSibling - devuelve el nodo inmediatamente anterior al especificado en la lista de nodos de su padre
// * nextElementSibling - devuelve el elemento inmediatamente posterior al especificado, dentro de la lista elementos hijos de su padre
// * previousElementSibling -retorna el elemento predecesor inmediato al especificado dentro de la lista de hijos de su padre
// let h2 = document.querySelector(".h2");
// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);

// ? Nodos - Extras
// * closest() - devuelve el ascendiente mas cercano al elemento actual(o el propio elemento actual)
// * que coincida con el selector proporcionado por parametro 
let div03 = document.querySelector("#div-03");
let div02 = div03.closest("#div-02");
console.log(div02);
let div01 = div03.closest("article > div");
console.log(div01);
let article = div03.closest(":not(div)");
console.log(article);

