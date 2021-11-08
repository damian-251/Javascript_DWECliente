'use strict'

let a = new Array();

a = [1,3,4,5,6];
console.log(a);
a.pop();

console.log(a);

a.shift();

console.log(a);

let cadena = a.join(" ");
console.log(cadena);

//Concatenar arrays

let b = ["hola", "concateno", "adios", "desconcateno"];

let c = a.concat(b); // A a le concatenamos b

console.log(c);

let d = c.slice(2,6);
console.log(d);


c.splice(3,4); //Elimina 4 elementos desde la posición 3

console.log(c);