'use strict'

//La siguiente variable contendrá el array ordenado
//El array se crea vacío
let arr=new Array();

//Variable para salir del bucle
let repetir=true;

do{
    //Pido un nuevo valor
    let valor=parseInt(prompt("Dame un número:"));

    //Y lo inserto en el array
    if(arr.length!=0){
        let temp=new Array(arr.length+1);
        let insertado=false;
        
        //Recorro el array buscando la posición donde insertar
        for (let i=0;i<arr.length;i++){

            if (!insertado){
                //Si no he insertado ya, compruebo en la posición actual
                if(arr[i]<valor){
                    temp[i]=arr[i];
                }
                else{
                    //Inserto el valor donde le corresponda
                    temp[i]=valor;
                    temp[i+1]=arr[i];
                    insertado=true;
                }
            }else{
                //Si ya ha insertado, paso el resto de valores
                temp[i+1]=arr[i];
            }
        }
        //Si no ha insertado, es que va al final
        if (!insertado){
            temp[temp.length-1]=valor;
        }
        arr=temp;

    }else{
        arr[0]=valor;
    }

    //Ahora muestro el array
    let result="";
    for (let v of arr)
        result+="->"+v    
    console.log(result);

    let seguir=prompt("¿Seguir? (S/N)");
    if (seguir.toUpperCase()=="N")
        repetir=false;

}while(repetir);