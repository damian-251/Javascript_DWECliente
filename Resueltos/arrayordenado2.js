'use strict'

//La siguiente variable contendrá el array ordenado
//El array se crea vacío
let arr=new Array();

//Variable para salir del bucle
let repetir=0;

//Constante para calcular nº de iteraciones
const ITER=15000;
alert("Vamos a empezar");
let tiempo=new Date();
let t1=tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
do{
    //Pido un nuevo valor
    let valor=Math.floor(Math.random()*(ITER+1));

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

    document.writeln(repetir);

}while((repetir++)<ITER);
tiempo=new Date();
let t2=tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
document.write("Se acabó");
alert("Fin del primer bucle "+t1+" "+t2);

//El array se crea vacío
arr=new Array();

//Variable para salir del bucle
repetir=0;
tiempo=new Date();
t1=tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
do{
    //Pido un nuevo valor
    let valor=Math.floor(Math.random()*(ITER+1));

    //Y lo inserto en el array
    document.writeln(repetir);
    arr.push(valor);
    arr.sort((a,b)=>a-b);

}while((repetir++)<ITER);
tiempo=new Date();
t2=tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
document.write("Se acabó");
alert("Se acabó bucle 2:"+t1+" "+t2);