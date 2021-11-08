'use strict';

/* 
Opcionalmente el programa preguntará:
- Si se desean contemplar o no los espacios en blanco
- Si deben distinguirse entre mayúsculas o minúsculas
- Si deben distinguirse o no las vocales con acento
*/

function eliminarAcentos(frase) {
    //Eliminamos los acentos
    let fraseSinAcentos = frase.replace(/á/g, "a");
    fraseSinAcentos = fraseSinAcentos.replace(/é/g, "e");
    fraseSinAcentos = fraseSinAcentos.replace(/í/g, "i");
    fraseSinAcentos = fraseSinAcentos.replace(/ó/g, "o");
    fraseSinAcentos = fraseSinAcentos.replace(/ú/g, "u");
    fraseSinAcentos = fraseSinAcentos.replace(/Á/g, "A");
    fraseSinAcentos = fraseSinAcentos.replace(/É/g, "E");
    fraseSinAcentos = fraseSinAcentos.replace(/Í/g, "I");
    fraseSinAcentos = fraseSinAcentos.replace(/Ó/g, "O");
    fraseSinAcentos = fraseSinAcentos.replace(/Ú/g, "U");

    return fraseSinAcentos;
}

function minusculas(frase) {
    //Ponemos toda la frase en minúsculas
    let fraseMinus = frase.toLowerCase();
    return fraseMinus;
}

function eliminaEspacios(frase) {
    //Eliminamos todos los espacios de la frase
    let fraseSinEspacios = frase.replace(/ /g, "");
    return fraseSinEspacios;
}

function esPalindromo(a) {

    if (espaciosBlanco != "s" && mayusMinus != "s" && vocalesAcento == "s") {
        //No tenemos en cuenta los espacios en blanco ni la diferencia entre mayúscula y minúscula
        a = eliminaEspacios(a);
        a = minusculas(a);
    } else if (espaciosBlanco != "s" && vocalesAcento != "s" && mayusMinus == "s") {
        //No tenemos en cuenta los espacios ni los acentos
        a = eliminaEspacios(a);
        a = eliminarAcentos(a);
    } else if (mayusMinus != "s" && vocalesAcento != "s" && espaciosBlanco == "s") {
        //No tenemos en cuenta las minúsculas y los acentos
        a = minusculas(a);
        a = eliminarAcentos(a);
    } else if (mayusMinus != "s" && vocalesAcento != "s" && espaciosBlanco != "s") {
        //Estamos ante la opción menos restrictiva, se ejecutan todas las funciones auxiliares
        a = eliminaEspacios(a);
        a = minusculas(a);
        a = eliminarAcentos(a);
    }

    //Si no se cumple nada de lo anterior se ejecuta la función sin realizar ningún cambio en la cadena de entrada
    //Sería la opción más restrictiva

    //Invertimos la frase
    let inv = "";
    for (let i = a.length - 1; i >= 0; i--) {
        inv += a[i];
    }
    console.log("Frase: " + a);
    console.log("Frase inversa: " + inv);
    //Comparamos la cadena invertida con la original
    if (inv == a) {
        return true;
    } else {
        return false;
    }
}

//Pedimos los datos y las opciones
let a = prompt("Escribe una frase");
let espaciosBlanco = prompt("¿Desea contemplar los espacios en blanco? (s = Sí)");
let mayusMinus = prompt("¿Deben distinguirse entre mayúsculas y minúsculas? (s = Sí)");
let vocalesAcento = prompt("¿Deben distinguirse las vocales con acento? (s = Sí)");

console.log("Tener en cuenta espacios en blanco: " + espaciosBlanco);
console.log("Tener en cuenta mayúsculas y minúsculas: " + mayusMinus);
console.log("Tener en cuenta los acentos: " + vocalesAcento);

//Comprobamos el resultado de la función
if (esPalindromo(a)) {
    alert("La frase \"" + a + "\"  SÍ es palíndromo");

} else {
    alert("La frase \"" + a + "\" NO es palíndromo");

}

