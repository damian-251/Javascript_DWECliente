/* 'use strict'

setTimeout(()=>{
    console.log("Se ha ejecutado el timer")
},5000); 

let temporizador = setTimeout(()=>{
    console.log("Se ha ejecutado el timer 2")
},5000); 

clearTimeout(temporizador);

//variable que se actualice cada segundo con timeOut, que vaya mostrando 1,2,3

let tiempo = 0;

function f() {
    tiempo++;
    console.log("Han pasado " + tiempo + " segundos");
    if (tiempo < 10) {
        setTimeout(f,1000);
    }
}

setTimeout(f,1000);

//Para sea un intervalo

tiempo = 0;
let a = 0;
let intervalo = setInterval(() => {
    console.log("Soy el intervalo " + ++a);
    if (a > 20) {
        clearInterval(intervalo);
    }
}, 1000);
 */


function multiplicar(a,b) {
    console.log(a*b);
}

setTimeout(multiplicar,3000,5,9);

