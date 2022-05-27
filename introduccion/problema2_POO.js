"use strict";
// # Problemas para la practica de POO
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
      Memoria RAM: <b>${this.ram}</b><br>
    `;
  }
}

class TopMobile extends Mobiles{
  constructor(color,weight,sr,cr,ram,ecr){
    super(color,weight,sr,cr,ram);
    this.extraCameraResolution = ecr;
  }

  slowVideo(){
    alert("El telefono esta grabando en camara lenta");
  }

  facialRecognition(){
    alert("El telefono esta haciendo un reconocimiento facial");
  }

  showMobileInfo(){
    return this.mobileInfo() + `Resolucion de Camara Trasera: <b>${this.extraCameraResolution}</b>`;
  }
}

// const mobile1 = new Mobiles("rojo","150g","5'","HD","1GB");
// const mobile2 = new Mobiles("negro","155g","5.4'","Full HD","2GB");
// const mobile3 = new Mobiles("blanco","15046g","5.9'","Full HD","2GB");

// mobile1.turnOn();
// mobile1.takePicture(); 
// mobile1.RecordVideo();
// mobile1.Restart();
// mobile1.turnOn();  

// document.write(`
//   ${mobile1.mobileInfo()} <br><br>
//   ${mobile2.mobileInfo()} <br><br>
//   ${mobile3.mobileInfo()}
// `);

// * Mostrar la informacion de un telefono de alta gama
// * Este telefono puede grabar  con camara lenta y cuenta con reconocimiento facial
// const mobile1 = new TopMobile("rojo","130g","5.2'","4K","3GB","Full HD");
// const mobile2 = new TopMobile("negro","142g","6'","4K","4GB","HD");

// document.write(`
//   ${mobile1.showMobileInfo()} <br><br>
//   ${mobile2.showMobileInfo()} <br><br>
// `);

// # Problema 2 para la practica de POO
// * Crear un sistema que ayude a cofla a decidir cual app descargar
// * la informacion de los instaladores debe contener la cantidad de descargas y la puntuacion de la app
// * Las apps se deben poder instalar, abrir, cerrar y desinstalar
class Apps{
  constructor(download,punctuation,weight){
    this.download = download;
    this.punctuation = punctuation;
    this.weight = weight;
    this.open = false;
    this.install = false;
  }

  openApp(){
    if(this.open == false && this.install == true){
      alert("La app se ha inicializado, disfrutala");
      this.open = true;
    }
  }

  closeApp(){
    if(this.open == true && this.install == true){
      alert("La app se cerrara, vuelve pronto");
      this.open = false;
    }
  }

  installApp(){
    if(this.install == false){
      alert("La app se comenzara a descargar");
      this.install = true;
    }else{
      alert("La app ya se encuentra instalada, disfrutala");
      this.install = false;
    }
  }

  desInstallApp(){
    if(this.install == true){
      alert("La app se desinstalara, vuelva pronto");
      this.install = false;
    }else{
      alert("La app no se encuentra instalada");
      this.install = true;
    }
  }

  appInfo(){
    return `
    Descargas: <b>${this.download}</b><br>
    Puntuación: <b>${this.punctuation}</b><br>
    Peso: <b>${this.weight}</b><br>
    `;
  }

}

const app = new Apps("16.000","5 estrellas","900MB");
const app2 = new Apps("15.000","4.5 estrellas","1GB");
const app3 = new Apps("14.000","4.5 estrellas","800MB ");
const app4 = new Apps("16.000","3.5 estrellas","600MB");
const app5 = new Apps("18.000","4.5 estrellas","1GB");
const app6 = new Apps("20.000","4 estrellas","900MB");
const app7 = new Apps("21.000","4.5 estrellas","600MB");

// app.installApp();
// app.desInstallApp();
// app.openApp();
// app.closeApp();

document.write(`
    ${app.appInfo()} <br><br>
    ${app2.appInfo()} <br><br>
    ${app3.appInfo()} <br><br>
    ${app4.appInfo()} <br><br>
    ${app5.appInfo()} <br><br>
    ${app6.appInfo()} <br><br>
    ${app7.appInfo()}
  `);
