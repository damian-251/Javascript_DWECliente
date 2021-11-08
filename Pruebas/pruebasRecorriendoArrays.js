'use strict'

let a = ["Hola", 2, 3 , 5, 6, true, false, "Pikachu"];

let [variable1,variable2,variable3,,variable4] = a;

console.log(a);

console.log("Variable 3: " + variable3)
console.log("Variable 4 " + variable4);

let b = a.map((num)=>num*2);

console.log(b);


let a = "45";
let b = 45;

console.log(a===b);
console.log(a==b);
console.log(a==="45");