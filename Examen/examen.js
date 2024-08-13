var nombre = new Array(4);
var salario = new Array(4);
var NuevoSalario = new Array(4);
var SalarioFinal = new Array(4);
var renta = new Array(4);

var opc=0;
var iss=0.97;
var afp=0.9375;

var i=0;
var j=0;


while(j < salario.length){
    //SOLICITUD DE DATOS
    nombre[j]=prompt("Ingrese nombre");
    salario[j]=parseFloat(prompt("Ingrese salario"));
    //VALIDACION DEL SALARIO
    while(salario[j]<257 || salario[j]>3000){
        salario[j]=parseFloat(prompt("Ingrese un salario en un rango de $257 a $3000"));
    };
    //DESCUENTO DE ISS Y AFP
    NuevoSalario[j] = (salario[j] * iss) * afp;
  //TRAMO1
    if (NuevoSalario[j] >= 0.01 && NuevoSalario[j] <= 472) {
      renta[j] = 0;
      SalarioFinal[j] = NuevoSalario[j] - renta[j];
    } 
    //TRAMO2
    else if (NuevoSalario[j] >= 472 && NuevoSalario[j] <= 895.24) {
      renta[j] = (NuevoSalario[j] - 472.00) * 0.011 + 17.67;
      SalarioFinal[j] = NuevoSalario[j] - renta[j];
    } 
    //TRAMO3
    else if (NuevoSalario[j] >= 895.25 && NuevoSalario[j] <= 2038.10) {
      renta[j] = (NuevoSalario[j] - 895.24) * 0.08 + 60.00;
      SalarioFinal[j] = NuevoSalario[j] - renta[j];
    }
    //TRAMO4
     else if (NuevoSalario[j] >= 2038.11) {
      renta[j] = (NuevoSalario[j] - 2038.10) * 0.07 + 288.57;
      SalarioFinal[j] = NuevoSalario[j] - renta[j];
    }
  
    j++;
  }
  



opc = parseInt(prompt("Ingrese la opción deseada \n 1. Imprimir vectores \n 2. Total de vectores"));

while (opc < 1 || opc > 2) {
  opc = parseInt(prompt("Ingrese la opción válida", "\n", "1. Imprimir vectores", "\n", "2. Total de vectores"));
}
//PROCESO DE IMPRESION DE VECTORES
if (opc == 1) {
  var l = 0;
  document.write("_______________________________________________________________________________________________________________________________<br>");
  document.write("Nombre----------------------Salario---------------------------------------ISS----------------------------AFP---------------------------------Renta-------------------------------Salario Final<br>");
  document.write("_______________________________________________________________________________________________________________________________<br>");

  while (l < nombre.length) {
    document.write(nombre[l] + "---------------------------------" +"$"+ salario[l].toFixed(2) + "---------------------------------" + "3%" + "---------------------------------" + "6%" + "---------------------------------" +"$"+renta[l].toFixed(2) + "---------------------------------" +"$"+SalarioFinal[l].toFixed(2) + "<br>");
    document.write("<br>");
    document.write("<br>");
    l++;
  }
  document.write("_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________<br>");
} else {
//FIN PROCESO DE IMPRESION DE VECTORES

    //VARIABLES PARA EL CALCULO TOTAL  DE SALARIOS, DESCUENTOS Y RENTA
    var salarioTT = 0;
    var NuevoSalarioTT = 0;
    var issTT = 0;
    var afpTT = 0;
    var rentaTT = 0;
    var SalarioFinalTT = 0;
  

    //PROCESO PARA HACER LA SUMA DE CADA ELEMENTO
    for (var i = 0; i < salario.length; i++) {
      salarioTT += salario[i];
      NuevoSalarioTT += NuevoSalario[i];
      issTT += NuevoSalario[i]-(NuevoSalario[i] * iss) ;
      afpTT += NuevoSalario[i]-(NuevoSalario[i] * afp);
      rentaTT += renta[i];
      SalarioFinalTT += SalarioFinal[i];
    }
  //FIN PROCESO
  document.write("<h1>SUMA TOTAL DE DATOS OBTENIDOS</h1>")
    document.write("Salario inicial total: $" + salarioTT.toFixed(2) + "<br>");
    document.write("Nuevo salario total: $" + NuevoSalarioTT.toFixed(2) + "<br>");
    document.write("ISSS total: $" + issTT.toFixed(2) + "<br>");
    document.write("AFP total: $" + afpTT.toFixed(2) + "<br>");
    document.write("Renta total: $" + rentaTT.toFixed(2) + "<br>");
    document.write("Salario Final total: $" + SalarioFinalTT.toFixed(2) + "<br>");
  }
