let elemento = document.getElementById("p1");

console.log(elemento);
console.log(elemento.innerText);

elemento.innerText = "Lo he  cambiado";

let arrayP = document.getElementsByTagName("p");

for (let p of arrayP) {
    console.log(p.innerText);
}

