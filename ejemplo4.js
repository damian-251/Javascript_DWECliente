

for (let i = 0 ; i< 10 ; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    document.write(i);
}
//No imprimiría el 5
//

document.write();

for (let i = 0 ; i< 10 ; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
    document.write(i);
}

//En este caso solo imprmiría hasta el 4.


/* let i = 0;
while (i<10) {
    if (i==5) continue;
    console.log(i++);
} */

console.log(123.3.toFixed);

//¿A qué objeto estoy apuntando con una variable?

let a;
a = 1;
a = "Hola a todods";
//a = f();
//a = f;

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(9007199254740991 + 8);


let t = Number.MAX_SAFE_INTEGER;
t+=55088888;
console.log(t);

let b = 3;
let c = "3a"
console.log("b-c");
console.log(b-c);
console.log(b+c); //aquí lo concatena

c = true;

console.log(!c);