'use strict'

const  SIZE = 15;


for (let i = 10; i > 0; i--) {
    //console.log(i);
}

let z = 0;

for (let i = 1, j = 10; i <= j; i++, j--) {

    console.log("i-->", i);
    console.log("j-->", j);
}



for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(z++);
    }

}


//Escribimos en el documento html


document.write("<pre>");

for (let i = 0; i < SIZE; i++) {

    for (let j = 0; j <= i; j++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("</pre>");


//Pirámida centrada 

document.write("<pre>");


for (let i = 0; i < SIZE; i++) {
    for (let espacio = 0; espacio < SIZE - i - 1; espacio++) {
        document.write(" ");
    }
    for (let almohadilla = 0; almohadilla <= 2 * i; almohadilla++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("</pre>");

document.write("<pre>");

//Rombo (añadir pirámide invertida)

for (let i = 0; i < SIZE; i++) {
    for (let espacio = 0; espacio < SIZE - i - 1; espacio++) {
        document.write(" ");
    }
    for (let almohadilla = 0; almohadilla <= 2 * i; almohadilla++) {
        document.write("#");
    }
    document.write("<br>");
}

for (let i = 0; i < SIZE; i++) {
    if (i == 0) { continue; }
    for (let espacio = 0; espacio < i; espacio++) {
        document.write(" ");
    }
    for (let almohadilla = 0; almohadilla <= 2 * (SIZE - i) - 2; almohadilla++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("</pre>");

