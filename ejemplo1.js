'use strict'
// El código de JavaScript vendrá aquí.
console.log("Hola, mundo!!!! desde otro archivo");
console.log(5.3 + 3.1);

//Creo un elemento
let v = document.createElement("p");
v.textContent = "Añadido dinámicamente";
document.body.appendChild(v);

const miConstante = 25;

let a;
a = 5;
console.log(a);
console.log(miConstante);

//Declaración de la función
function miFuncion(nombre) {
    console.log("Te llamas " + nombre);
}
//Utilización de la función
miFuncion("Damián");

miFuncion("");

console.log(miFuncion());

let f= function(a,b) {
    return a*b;
}

console.log(f(2,3));

let g=miFuncion;
let h=miFuncion();

console.log(h);

function totalPrice (price, units) {
    return price*units;
}

let fuex = function(a, b) {
    return a + b;
}

console.log("Tipo de variable.");
console.log(typeof fuex);
console.log("Mostramos la variable");
console.log(fuex(2,5));

let m = fuex;
console.log("h, tipo de variable");
console.log(typeof(m));
console.log("Mostramos la variable h");
console.log(m(10,20));