'use strict'
let a = [5, 9, 45, 58, 7, 10];
console.log(a);

console.log(a.sort());

console.log("Ordenamos a de forma inversa");

console.log(a.sort((a, b) => b - a));


let arrayNombres = [["Damián", 30], ["Paula", 31], ["Ana", 27]];

console.log("Ordenado por nombres: " + arrayNombres.sort((a, b) => {
    if (a[0] > b[0]) {
        return +1;
    } else {
        return -1;
    }
}
));

console.log("Ordenado por edad " + arrayNombres.sort((a, b) => {
    if (a[1] > b[1]) {
        return +1;
    } else {
        return -1;
    }
}));

console.log("Filer");

let arrayFiltrar = [4, 21, 33, 12,9 ,54];

a.filter(num=>num%2==0);

console.log(arrayFiltrar);


let arrayTest = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
arrayTest.copyWithin(2,4,6);
//Esperado
//["a", "b", "e", "f", "e", "f","g","h","i"]
console.log(arrayTest);