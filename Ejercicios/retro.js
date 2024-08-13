var si, i, d, sf, n, ca;
var descuento=0;
var cantidad=0;
var cargo="";

var cantSI=0;
var cantD=0;
var cantDEU=0;
var cantSFU=0;
var cantOT=0;
var cantGE=0;

document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento</td><td>Salario final</td><td>Cargo</td><td>Descuento por uniforme</td><td>Salario final con uniforme</td></tr>');
cantidad=parseInt(prompt("Ingrese la cantidad de empleados que desea registrar: "))
for (i = 1; i <= cantidad; i++) {

    n = prompt('Digite el nombre del obrero número ' + i + '');
    ca=parseInt(prompt('Digite el cargo del empleado: \n 1. Gerente \n 2. Otro'));
        while(ca<1 || ca>2){
            ca=prompt('Ingrese una opcion valida: \n 1. Gerente \n 2. Otro');
        }
        if(ca==1){
           
            descuento=50;
            cargo="Gerente";
            cantGE++;
        }
        else{
           
            descuento=25;
            cargo="Otro";
            cantOT++;
        }
    si = parseFloat(prompt('Digite el salario inicial del empleado', ''));
    while(si<365){
        si = prompt('Digite el salario inicial del empleado (debe ser mayor a $365)', '');
    }
    d = si * 0.05;
    sf = si - d;
    var sfu= sf-descuento;
    cantSI=cantSI+si;
    cantD=cantD+d;
    cantDEU=cantDEU+descuento;
    cantSFU=cantSFU+sfu;

    document.write('<tr><td>' + i.toFixed(2) + '</td><td>' + n + '</td><td>$' + si.toFixed(2) + '</td><td>$' + d.toFixed(2) + '</td><td>$' + sf.toFixed(2) + '</td><td>'+cargo+'</td><td>$'+descuento.toFixed(2)+'</td><td>$'+sfu.toFixed(2)+'</td></tr>');
}
document.write('</table>');
document.write('<br>');
document.write('<b>DATOS GENERALES</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Monto total <br> concepto de salarios</td><td>Monto total <br> concepto de descuentos</td><td>Monto total concepto de <br> descuentos por uniforme</td><td>Monto total <br> concepto de salarios con uniforme</td><td>Cantidad de <br> gerentes</td><td>Cantidad de <br> otros empleados</td></tr>');
document.write('<tr><td>$'+(cantSI).toFixed(2)+'</td><td>$'+(cantD).toFixed(2)+'</td><td>$'+(cantDEU).toFixed(2)+'</td><td>$'+(cantSFU).toFixed(2)+'</td><td>'+cantGE+'</td><td>'+cantOT+'</td></tr>');