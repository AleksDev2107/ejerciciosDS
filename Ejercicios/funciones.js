
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function semanita()
{
    for (let i = 0; i < dias.length; i++)
        {
        document.write(dias[i],"<br>");
        }
}   
//Llamando la función
//semanita();

//CREAR UNA FUNCION QUE IMPRIMA 10 VECES UNA FRASE
var inicio=10000;
var fin=100000;

var frase="nsqmdxr";

function inverso(){
    for (let index = fin; index >= inicio; index-=1000) {
        document.write(index,"--");
    }
}

function serie(){
    for (let index = inicio; index <= fin; index=index+1000) {
        //FORMA 2
        //for (let index = inicio; index <= fin; index+=1000)
        document.write(index,"--");
    }
}

function texto(){
    var i=1;
    while(i<=10){
        document.write(i," ",frase,"<br>");
        i++;
    }
}

