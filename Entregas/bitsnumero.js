let mask = 1;
let cadena = "";
let a = prompt("Dime un número ");

/* 
Se realiza la operación binaria AND mediante la máscara 1
para poder obtener el valor del último bit, a continuación
corremos los bits hacia la derecha para que el siguiente bit
sea el último, de esta forma obtenemos todos los bits del número
y los pasamos a una cadena para posteriormente poder invertirla y
mostrar el número en pantalla como se indica.
*/
for (let i = 0; i < 32 ; i++){
    number = mask & a;
    a = a >>> 1;
    cadena += number.toString();
}


document.write("<pre>");
//Escribimos la fila de BXX
for (let i = 0; i <= 31; i++) {
    if (31 -i < 10) {
        document.write("B0" + (31 - i) + " ");
    }else {
        document.write("B" + (31 - i) + " ");

    }
}
document.write("<br>");

//Se escriben las líneas de abajo.
for (i = 0; i <= 31; i++) {
    document.write("___ ");
}
document.write("<br>");

//Se escribe la cadena del número en binario
j = 0;
for (i = 31; i >=0; i--) {
    document.write(" " + cadena[i] +"  ");

}

document.write("</pre>");


