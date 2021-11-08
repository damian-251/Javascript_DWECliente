
let a = 20;

mask = 1;
cadena = "";
cadenaNueva ="";
for (let i = 0; i < 32 ; i++){
    number = mask & a;
    a = a >>> 1;
    cadena += number.toString();
}

for (i = 31 ; i>= 0 ; i--) {
    document.write(cadena[i]);
}
