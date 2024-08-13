var cantidad=0;
var j=1000;

cantidad=parseFloat(prompt("Ingrese la cantidad de dolares a mostrare"));

while(cantidad<1000 || cantidad>100000){
    cantidad=parseFloat(prompt("Ingrese una cantidad en un rango de 1000-100000"))
}

document.write("__________________________________________________________<br>");
document.write("DOLARES------------------BTC----------------------------------ETH<br>");
document.write("__________________________________________________________<br>");

while (j <= cantidad) {
    document.write("$"+j+"----------------"+j/57810+"------------------"+j/3062);
    document.write("<br>");
    document.write("<br>");
    j++;
}
document.write("___________________________________________________________<br>"); 