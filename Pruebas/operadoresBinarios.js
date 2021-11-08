'use strict'

let cadena = "Hola a todos y a mi abuelo que está aquí sentado";

console.log(cadena.length);
console.log(cadena.charAt(3));
console.log(cadena.indexOf("a"));
console.log(cadena.lastIndexOf("a"));
console.log(cadena.match(/\b(?=\w*[a])\w+\b/g)); //Devuelve un array
console.log(cadena.search(/[a]/));
console.log(cadena.substr(3,2));
console.log(cadena.includes("to"));

console.log(!!undefined);
console.log(!!null);
console.log(!!"");
console.log(!!0);
console.log(!!1);
console.log(!!"A mamarla chavales");

cadena = "Frase de prueba, a ver qué pasa";

console.log(cadena.substring(9,15));

console.log(cadena.substr(9,3));

console.log(cadena.toLocaleUpperCase());
console.log(cadena);
console.log(cadena.toLocaleUpperCase());
console.log(cadena);



let cadenaSucia = "          jjajajajaj       qeu graciaaaaa pero qué me estás contando               ";
console.log(cadenaSucia.trim());
console.log(cadenaSucia);


let jajaxd = (cadena)=>cadena.startsWith(" ");
console.log(jajaxd(cadenaSucia));

function estoyAqui (cadena) {
    if (cadena.startsWith(" ")) {
        return "Empieza por espacio chaval, trimea eso";
    }else {
        return "La frase está prefect amigo, no problem";
    }
}

console.log(estoyAqui(cadenaSucia));
console.log(estoyAqui("Hola caracola"));

let loro = cadena.repeat(5);
console.log(loro);

cadena = "Esto es una prueba informativa";
console.log(cadena=> {
if(cadena.includes("prueba")) {
    return "Incluye la palabra prueba";
}else {
    return "NO incluye la palabra prueba";
}
});

console.log(cadena.includes("prueba"));


