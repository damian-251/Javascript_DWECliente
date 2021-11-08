//Ordenar array

let a = [];
let aux = [];
let numero = 0;
let i = 0;
let size = 10;
a.length = size;

a[0] = prompt("Introduce valor: ");

for (let i = 1 ; i< a.length ; i++) {
    numero = prompt("Introduce valor");
    if (a[i-1] > a [i]) {
        //Ponemos en la auxiliar el resto del array
        aux.length = a.length - i
        for (let j = 0 ; j < aux.length ; j++) {
            for (k = i ; k < a.length ; k++) {
                //Separamos el array
                aux[k] = a[i];
            }
        }
        //Ponemos 
    }
}

/*
public static int[] addPos(int[] a, int pos, int num) {
    int[] result = new int[a.length];
    for(int i = 0; i < pos; i++)
        result[i] = a[i];
    result[pos] = num;
    for(int i = pos + 1; i < a.length; i++)
        result[i] = a[i - 1];
    return result;
}


*/