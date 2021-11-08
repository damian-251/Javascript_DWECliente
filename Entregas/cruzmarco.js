
let a = prompt("Introduzca el lado exterior");
let b = prompt("Introduzca el lado interior");

/* Las figuras han sido divididas en tres secciones en las que cada una 
cumple un patrón determinado el cual depende de los valores de los lados
interior y exterior*/
document.write("<pre>");


//Cruz
document.writeln("CRUZ");

//Parte superior de la cruz
for (i = 0 ; i < (a-b)/2  ; i++) {
    for (j = 0 ; j < a ; j++) {
        //bordes de la cruz
        if (j < (a-b)/2 || j >= a - (a-b)/2) {
            document.write("#");
            //parte superior de la cruz
        }else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

document.write("<br>");

for (i = (a-b)/2 ; i < a - (a-b)/2  ; i++) {
    for (j = 0; j<a ; j++) {
        //parte central de la cruz
        document.write(" ");
    }
    document.write("<br>");
}

for (i = a - (a-b)/2 ; i < a ; i++) {
    for (j = 0 ; j < a ; j++) {
        //bordes inferiores
        if (j < (a-b)/2 || j >= a - (a-b)/2) {
            document.write("#");
        }else {
            //parte inferior cruz
            document.write(" ");
        }
    }
    document.write("<br>");
}

//Marco
document.writeln("MARCO");
//La cantidad de filas que tiene la parte superior está relacionada con el lado mayor y lado menor.
//Cuanto mayor sea el lado menor menos filas tendrá esta parte.
for (i = 0 ; i < (a-b)/2 ; i++) {
    for (j = 0; j<a ; j++) {
        document.write("#");
    }
    document.write("<br>");
}

//Aquí se dibuja el cuadrado interior 
for (i = (a-b)/2 ; i < a - (a-b)/2  ; i++) {
    for (j = 0 ; j < a ; j++) {
        //Las esquinas del cuadrado mayor, la izquierda y la derecha
        if (j < (a-b)/2 || j >= a - (a-b)/2) {
            document.write("#");
            //Interior del cuadrado menor
        }else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

//Parte inferior del cuadrado mayor
for (i = a - (a-b)/2 ; i < a ; i++) {
    for (j = 0; j<a ; j++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("</pre>");
