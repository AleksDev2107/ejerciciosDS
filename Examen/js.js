var nombre = new Array(4);
var salario = new Array(4);
var NuevoSalario = new Array(4);
var SalarioFinal = new Array(4);
var Renta = new Array(4);

var opc = 0;
var iss = 0.97;
var afp = 0.9375;

var i = 0;
var j = 0;

while (i < nombre.length) {
  nombre[i] = prompt("Ingrese nombre");
  i++;
}

while (j < salario.length) {
  salario[j] = parseFloat(prompt("Ingrese salario"));
  NuevoSalario[j] = (salario[j] * iss) * afp;

  if (NuevoSalario[j] >= 0.01 && NuevoSalario[j] <= 472) {
    Renta[j] = 0;
    SalarioFinal[j] = NuevoSalario[j] - Renta[j];
  } else if (NuevoSalario[j] >= 472.01 && NuevoSalario[j] <= 895.24) {
    Renta[j] = (NuevoSalario[j] - 472.00) * 0.011 + 17.67;
    SalarioFinal[j] = NuevoSalario[j] - Renta[j];
  } else if (NuevoSalario[j] >= 895.25 && NuevoSalario[j] <= 2038.10) {
    Renta[j] = (NuevoSalario[j] - 895.24) * 0.08 + 60.00;
    SalarioFinal[j] = NuevoSalario[j] - Renta[j];
  } else if (NuevoSalario[j] >= 2038.11) {
    Renta[j] = (NuevoSalario[j] - 2038.10) * 0.07 + 288.57;
    SalarioFinal[j] = NuevoSalario[j] - Renta[j];
  }

  j++;
}

opc = parseInt(prompt("Ingrese la opción deseada \n 1. Imprimir vectores \n 2. Total de vectores"));

while (opc < 1 || opc > 2) {
  opc = parseInt(prompt("Ingrese la opción válida", "\n", "1. Imprimir vectores", "\n", "2. Total de vectores"));
}

if (opc == 1) {
  var l = 0;
  document.write("_______________________________________________________________________________________________________________________________<br>");
  document.write("Nombre------------------Salario------------------ISS------------------AFP------------------Renta------------------Salario Final<br>");
  document.write("_______________________________________________________________________________________________________________________________<br>");

  while (l < nombre.length) {
    document.write(nombre[l] + "---------------------------------" + salario[l].toFixed(2) + "---------------------------------" + "3%" + "---------------------------------" + "6%" + "---------------------------------" + Renta[l].toFixed(2) + "---------------------------------" + SalarioFinal[l].toFixed(2) + "<br>");
    document.write("<br>");
    document.write("<br>");
    l++;
  }
  document.write("_______________________________________________________________________________________________________________________________<br>");
} else {
  // Implementar opción 2
}