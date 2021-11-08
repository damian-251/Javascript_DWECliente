'use strict'

let arrayA = [1,4,5,6,7];

arrayA.splice(1,2);



let numero = 10;
let arrayOrder = [1,2,8,11,18,32];
let arrayTemp = new Array();
let arrayNew = new Array();


let ultimo = true;

function insertarNumero (numero, array) {

    for (let i = 0; i<array.length ; i++) {
        if (numero < array[i]) {
            arrayTemp = array.splice(i, array.length);
            arrayNew = [...array];
            arrayNew.push(numero);
            arrayNew = arrayNew.concat(arrayTemp);
            ultimo = false;
        }
    }
    if (ultimo = true) {
        arrayNew = [...array];
    }
    return arrayNew;
}


numero = 0;
while (true) {
    numero = parseInt(prompt("Dime un número")) ;
    arrayOrder = [...insertarNumero(numero, arrayOrder)];
    console.log(arrayOrder);
}