let a = new Array(10); //Todas las posiciones serían udefined

//Cada valor puede tener el tipo que se quiere
let b = [1,2,"3", true];
b[0] = new Array(10);


let value = prompt("Escribe el tamaño del array");

console.log("el valor: " + value);


let c = new Array(parseInt(value,10));

console.log("Tamaño array: " + c.length);

for (let i=0 ; i<c.length ; i++) {
    c[i] = i;
}

for ( i=0 ; i<c.length ; i++) {
    console.log(c[i]);
}

Math.random(); //Valor entre 0 y 1, nunca toma el valor 1.

d = Math.random() * 10

Math.floor(Math.random() * (10 + 1)); //Entre 0 y 10

//Entre 50 y 60

let vmin = 50;
let vmax = 70;

Math.floor(Math.random() * (vmax - vmin + 1) + vmin); //Entre 50 vmin, 70 vmx

for (let i=0 ; i<c.length ; i++) {
    c[i] = Math.floor(Math.random() * (vmax - vmin + 1) + vmin);;
}


console.log("Con bucle for normal");
for ( i=0 ; i<c.length ; i++) {
    console.log(c[i]);
}

// for in

console.log("Con bucle for-in: ");
for (let i in c) {
    console.log(c[i]);
} //i pilla el valor del índice, aquí si puedo modificar los datos

//for of 

console.log("Con for in: ")
for (let i of c) {
    console.log(i);
}//i pilla el valor que hay, aquí no puedo mosificar los datos

for (let j=0 ; j<c.length ; j++) {
    let i = a[j];
    console.log(i);
}

//------------------------

let size = 30;

arrayA = new Array(size);
vmin = 0;
vmax = 100;
 //Entre 50 vmin, 70 vmx

//Generamos el array
console.log("Array Aleatoria mayor y menor");

//generamos el array
for (i = 0 ; i< arrayA.length ; i++) {
    arrayA[i] = Math.floor(Math.random() * (vmax - vmin + 1) + vmin);
}
let mayor = arrayA[0];
let menor = arrayA[0];

//Lo recorremos y vamos comparando los valores con el bucle for of (for of recorre los valores)
for (valor of arrayA) {
    console.log(valor);
    if (valor < menor) {
        menor = valor;
    }
    if (valor > mayor) {
        mayor = valor;
    }
}

console.log("El mayor es: " + mayor + " y el menor es: " + menor + ".");
