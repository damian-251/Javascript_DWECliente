'use strict'

/* -- FUNCIONES -- */

/**
 * Genera una matriz aleatoria a partir de las filas, las columas
 * y de un rango de números aleatorios
 * 
 * @param {number} filas Número de filas de la matriz
 * @param {number} columnas Número de columas de la matriz
 * @param {number} vmin Valor mínimo aleatorio (incluído)
 * @param {number} vmax Valor máximo aleatorio (incluído)
 * @returns {array} matriz Matriz generada
 */
function generarMatrizAleatoria(filas, columnas, vmin, vmax) {
    let matriz2 = new Array();
    for (let i = 0; i < filas; i++) {
        //Inicializamos la fila de la matriz
        matriz2[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz2[i][j] = Math.floor(Math.random() * (vmax - vmin + 1) + vmin);
        }
    }
    return matriz2;
}

/**
 * Multiplica dos matrices dadas (producto matricial)
 * @param {array} matriz1 Primera matriz
 * @param {array} matriz2 Segunda matriz
 * @returns {array} producto Producto de las dos matrices 
 */
function multiplicarMatrices(matriz1, matriz2) {
    let producto = [];
    //filas de la primera matriz
    for (let i = 0; i < matriz1.length; i++) {
        //Hay que inicializar cada fila del array producto
        producto[i] = [];
        //columnas de la segunda matriz
        for (let j = 0; j < matriz2[0].length; j++) {
            producto[i][j] = 0;
            //columnas de la primera matriz
            for (let k = 0; k < matriz1[0].length; k++) {
                producto[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return producto;
}

/**
 * Multplica una matriz por un escalar
 * @param {array} matriz matriz
 * @param {number} escalar número escalar por el que multiplicar la matriz
 * @returns {array} producto producto de la multiplicación del array por el escalar
 */
function multiplicarMatrizEscalar(matriz, escalar) {
    let producto = new Array();
    for (let i = 0; i < matriz.length; i++) {
        producto[i] = [];
        //Multiplicamos cada valor de la matriz por el escalar
        for (let j = 0; j < matriz[i].length; j++) {
            //Vamos sumando y añadiendo el valor al resultado en cada iteración
            producto[i][j] = escalar * matriz[i][j];
        }
    }
    return producto;
}

/**
 * Dibuja la matriz introducida como tabla
 * @param {array} matriz matriz a dibujar
 */
function dibujarMatrizTabla(matriz) {
    document.write("<table style='text-align:center;'>");
    for (let i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (let j = 0; j < matriz[i].length; j++) {
            document.write("<td style='padding:.5em; font-size:1.1em; background-color: whitesmoke' >");
            document.write(matriz[i][j]);
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}



/* -- PROGRAMA PRINCIPAL -- */

//Primero pedimos si desea realizar una multiplicación escalar o una matricial

let opcion = prompt("¿Qué operación desea realizar?" +
    "\ne-> Multiplicación Escalar" +
    "\nm -> Multiplicación matricial");

//Se dimensiona la matriz 1
let filasMatriz1 = parseInt(prompt("Filas de la matriz 1"));
let columnasMatriz1 = parseInt(prompt("Columnas de la matriz 1"));
let matriz1 = generarMatrizAleatoria(filasMatriz1, columnasMatriz1, -10, +10);

//Se inicializa el resultado
let resultado = new Array();

document.write("<h2>Matriz 1</h2>");
dibujarMatrizTabla(matriz1);

if (opcion == "m") { //Multiplicación de matrices

    //Se dimensiona la matriz2
    let filasMatriz2 = parseInt(prompt("Filas de la matriz 2"));
    let columnasMatriz2 = parseInt(prompt("Columnas de la matriz 2"));
    let matriz2 = generarMatrizAleatoria(filasMatriz2, columnasMatriz2, -10, +10);
    document.write("<h2>Matriz 2</h2>")
    dibujarMatrizTabla(matriz2);

    //Para que dos matrices sean multiplicables las columnas de la matriz1 deben ser igual a las filas de matriz2
    if (columnasMatriz1 == filasMatriz2) {
        resultado = multiplicarMatrices(matriz1, matriz2);
        document.write("<h2>Producto matricial</h2>");
        dibujarMatrizTabla(resultado);
        //Si no lo son las matrices no serán multiplicables
    } else {
        alert("Las matrices no son multiplicables");
    }
} else if (opcion == "e") { //Multiplicación de matriz por escalar
    let escalar = parseInt(prompt("Introduce el número escalar: "));
    document.write("<h2>Escalar: " + escalar + "</h2>");
    resultado = multiplicarMatrizEscalar(matriz1, escalar);
    document.write("<h3>Producto escalar:</h3>");
    dibujarMatrizTabla(resultado);
} else {
    alert("Opción no válida");
}