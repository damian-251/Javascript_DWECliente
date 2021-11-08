//let a = [1, 4, 9, 6, 3, 2, 8, 3, 0, 45];


//Función de comparación
/* function comparar(a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }

} */
//
//a.sort(comparar); //Usa strings por defecto

//console.log(a);


//a.sort((a,b)=>a-b);


let personas = [[25, "XPersona1"], [4, "BPersona3"], [75, "ZPersona 4"], [35, "APersona 5"]]; //[edad, nombre]
console.log(personas.length);
console.log(personas[2][0]);


/* 
personas[0][0];
personas[1][0];

*/

function comparar(a, b) {
    if (a[0] > b[0]) {
        return +1;
    } else {
        return -1;
    }
}

personas.sort(comparar);
personas.sort((a, b) => b[0] - a[0]);
console.log(personas);


let listaPersonas = [[25, "Giorgi", "alumno"],
[24, "Miguel", "alumno"],
[48, "José Juan", "profesor"],
[25, "Juana", "alumno"],
[21, "Luisa", "alumno"],
[35, "Sebastián", "administrativo"],
[24, "Julián", "alumno"],
[34, "Teresa", "administrativo"],
[44, "Jose", "profesor"],
[50, "Jose", "profesor"],
[25, "Juan Manuel", "alumno"],
[31, "Alex", "alumno"]];

//Profesores, administrativos, alumnos - edad alfabéticamente


arrayHola = ["alumnos" , "administrativos", "profesores"];
arrayHola[0] = "alumnos";
arrayHola[2]= "profesores";

console.log("Hola a todos " + arrayHola.indexOf("alumnos"));

function comparar2(a, b) {


    if (b[2] < a[2]) {
        return +1;
    } else if (b[2] == a[2]) {
        if (b[1] < a[1]) {
            return +1;
        } else if (b[1] == a[1]) {
            if (b[0] < a[0]) {
                return +1;
            }
        }
    } else {
        return -1;
    }
}

//console.log("Lista personas");
//listaPersonas.sort(comparar2);
//console.log(listaPersonas);
console.log("OrdenACIN 2");
//listaPersonas.sort((x,y)=> x[1] - y[1]);
//console.log(listaPersonas);

console.log(listaPersonas.sort((a,b)=>a[1]-b[1]));




a = [3, 21, 15, 61, 9, 54];
let sum = 0;
a.forEach(num => sum += num);
console.log(sum); // Imprime 163 

a.forEach((num, indice, array) => { // índice y array son parámetros opcionales
    console.log("Índice " + indice + " en [" + array + "] es " + num);
    }); // Imprime -> Índice 0 en [3,21,15,61,9,54] es 3, Índice 1 en [3,21,15,61,9,54] es 21, ...

console.log(a.map(a=>a*10));


a = a.map(valor=>{
    if (valor>10){
        return valor*10;
    }else {
        return ":-)"; //si no los que no se apliquen serían undefined
    }
})

console.log(a);