"use strict";
// # Problema para la practica de POO
// * Crear un sistema para mostrarle a cogla las particulairades de 3 celulares
// * Cada celular debe tener color, peso, resolucion de patanlla, resolucion de camara y memoria ram
// * Cada celular debe poder prender, reiniciar, tomar fotos y grabar

class Mobiles {
  constructor(color,weight,sr,cr,ram){
    this.color = color;
    this.weight = weight;
    this.screenResolution = sr;
    this.cameraResolution = cr;
    this.ram = ram;
    this.PowerState = false;
  }

  turnOn() {
    if(this.PowerState === false){
      alert("El telefono ha sido encendido");
      this.PowerState = true;
    }else{
      alert("El celular ha sido apagado");
      this.PowerState = false;
    }
  }

  Restart() {
    if(this.PowerState === true){
      alert("El telefono se reiniciara");
    }else{
      alert("El telefono no se puede reiniciar porque esta apagado");
    }
  }

  takePicture() {
    if(this.PowerState === true){
      alert(`Foto tomada en una resolucion de: ${this.screenResolution}`);
    }else{
      alert("El telefono esta apagado, favor de encederlo");
    }
  }

  RecordVideo(){
    if(this.PowerState === true){
      alert(`Grabando video en una resolucion de: ${this.cameraResolution}`);
    }else{
      alert("El telefono esta apagado, favor de encenderlo");
    }
  }

  mobileInfo(){
    return `
      Color: <b>${this.color}</b><br>
      Peso: <b>${this.weight}</b><br>
      Tamaño de pantalla: <b>${this.screenResolution}</b><br>
      Resolucion de video: <b>${this.cameraResolution}</b><br>
      Memoria RAM: <b>${this.ram}</b>
    `;
  }
}

const mobile1 = new Mobiles("rojo","150g","5'","HD","1GB");
const mobile2 = new Mobiles("negro","155g","5.4'","Full HD","2GB");
const mobile3 = new Mobiles("blanco","15046g","5.9'","Full HD","2GB");

// mobile1.turnOn();
// mobile1.takePicture(); 
// mobile1.RecordVideo();
// mobile1.Restart();
// mobile1.turnOn();  

document.write(`
  ${mobile1.mobileInfo()} <br>
  ${mobile2.mobileInfo()} <br>
  ${mobile3.mobileInfo()}
`);


