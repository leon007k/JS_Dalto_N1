"use strict";

class Animals {
  constructor(species,age,color){
    this.species = species;
    this.age = age;
    this.color = color;
    this.info = `Soy un ${this.species}, tengo ${this.age} años y soy de color ${this.color}<br>`;
  }
  showInfo(){
    document.write(this.info);
  }
}

class Dog extends Animals {
  constructor(species,age,color,raza){
    super(species,age,color);
    //this.raza = raza;
    this.raza = null;
  }
  bark(){
    alert("WOW!!");
  }
  // ? metodo set permite modificar el valor de una propiedad
  set setRaza(newName){
    this.raza = newName;
  }
  // ? meetodo get nos permite obtener cierta propiedad de una clase
  get getRaza(){
    return this.raza;
  }
}

const dog = new Dog("perro",2,"marron","bulldog");
dog.showInfo();
// * De esta forma asignamos la nueva raza
dog.setRaza = "Doberman";
document.write(dog.getRaza);