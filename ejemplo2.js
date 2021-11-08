//Funciones lamba
let f = (a, b) => a + b;
console.log(f(2, 3));


let f1 = (a, b) => {
    console.log("dentro de la función lambda");
    return a + b;
}
//Solo puedo ahorrarme las llaves cuando solamente hay una instrucción.

let f3 = (a) => a * a;

function prueba(a) {
    return a * a;
}

f4 = a => a * a;



let eresViejo = (edad) => {
    if (edad > 30) {
        console.log("Eres viejo");
    } else {
        console.log("Eres joven");
    }
}

console.log(eresViejo(29));

let mayorDosNumeros = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(mayorDosNumeros(mayorDosNumeros(1, 2), 3));



/* if (temperatura)
    console.log("Hace " + temperatura + "ª");
else
    console.log("El agua se congela");
 */

let diaSemana = 5;

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día de la semana erróneo");
        break;
}

switch (diaSemana) {
    case 1:
    case 2:
    case 3:
        console.log("Inicio de la semana laboral");
        break;
    case 4:
    case 5:
        console.log("Final de la semana laboral");
        break;
    case 6:
    case 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día de la semana erróneo");
        break;
}

//Se puede dinámico 

/* Se puede poner en el case directamente el día de la semana 
 */

switch (true) {
    case diaSemana >= 1 && diaSemana <= 3:
        console.log("Inicio de la semana laboral");
        break;
    case diaSemana >= 4 && diaSemana <= 5:
        console.log("Final de la semana laboral");
        break;
    case diaSemana >= 6 && diaSemana <= 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día de la semana erróneo");
        break;
}

//Bucle que cuente de 10 hasta 0

let numero = 11;

while (numero) console.log(--numero);

//El -- delante indica que primero lo resta y luego lo muestra
//Si fuese al revés sería que primero lo muestra y luego lo resta
//Hay que intentar que las instrucciones ocupen lo menos posible para así
//poder ahorrrar ancho de banda.


numero = 10;
do {
    console.log(numero--);
}while (numero >=0);

