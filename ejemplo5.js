let a = 5;


console.log(a++); //Se muestra 5

console.log(a); // Se muestra 6

console.log(++a); //Se muestra 7

//console.log((++a)++); //Esto no se puede

a = 5;
let b = 8;

console.log(a&&b);

console.log(a&b); //Devuelve 0

a= 5;
b = -1;

console.log(a&b); 

/* Da 5 porque porque los dos están en complemento a 2, uno en número positivo
y el otro en número ne negativo. */


//Operaciones de desplazamiento

//<< desplazamiento a la izquierda en bits.
//valor<< nº de bits a desplazar

a = 5;

a<<1;
console.log(a);
//Da 5 porque no he guardado el valor.

a = a<<2;

console.log(a); //Desplazar a la izquierda sería como multiplicar por dos
//5 --> 0101
//10 --> 1010

a = 5;

console.log("Bucle");
console.log(a);
for (let i = 0 ; i<32 ;i++) {
    a = a<<1;
    console.log(a);

}
//32 para que desplace los 32 bits.
//Va creciendo y de repente da negativo.
//Da negativo porque hay un uno al final y el ordenador está trabajando en complemento a 2.
//si vuelvo a desplazar desplazo el 1 que había en la primera casilla y por eso no da negativo
//luego pone el 1 que habia y por eso vuelve a salir negativo
//al final solo quedan 0 por lo que salen ceros.


/* 
por la derecha siempre se meten 0 pero por la izquierda el operador de desplazamiento
replica el bit de signo si el signo es 0 replica 0 si es 1 replica 1


El operador triple metería siempre ceros 0.
>>> (el de tres hacia la izquierda no existe)
*/


a=prompt("Escribe un número");


/* 

*/

a = 5;
console.log(a.length);

function f(a);

if ("length" in a) {
    //es true si a puede invocar el método length, si es un núemerno a no podrá y es falso.
}