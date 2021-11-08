let a="hola adios";
console.log(a);

console.log(a[3]); 

//a[3] = "O" --> No sirve para escritura, solamente como lectura, una string NO es una array
//Sería como un getter

for (let i = 0 ; i < a.length ; i++) {
    console.log(a[i]);
}

let c = "Hola caracola";

let expR=c.match(/abc/g);

for (i=0 ; i<expR.length ;i++) {
    console.log(expR[i]);
}

