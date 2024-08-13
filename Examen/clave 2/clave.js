//VARIABLE PARA DEFINIR EL TAMAÑO
var Tamano = 0;
Tamano = parseInt(prompt("Ingrese la cantidad de personas"));
//VARIABLE CONTADOR 1
var i = 0;
//ARREGLOS A UTILIZAR
var sexo = new Array(Tamano);
var trabajo = new Array(Tamano);
var sueldo = new Array(Tamano);
var edad = new Array(Tamano);
//PROCESO
while (i < sexo.length) {
    sexo[i] = parseInt(prompt("Ingrese sexo (1=masculino, 2=femenino)"));
    while (sexo[i] < 1 || sexo[i] > 2) {
        sexo[i] = parseInt(prompt("Ingrese un rango valido de sexo (1=masculino, 2=femenino)"));
    }
    trabajo[i] = parseInt(prompt("Ingrese trabajo (1=si trabaja, 2= no trabaja)"));
    if (trabajo[i] == 1) {
        sueldo[i] = parseInt(prompt("Ingrese sueldo"));
        while (sueldo[i] < 600 || sueldo[i] > 2000) {
            sueldo[i] = parseInt(prompt("Ingrese un rango valido de sueldo (600-2000)"));
        }
    }
    else { sueldo[i] = 0; }

    while (trabajo[i] < 1 || trabajo[i] > 2) {
        trabajo[i] = parseInt(prompt("Ingrese un rango valido de trabajo (1=si trabaja, 2= no trabaja)"));
    }
    edad[i] = parseInt(prompt("Ingrese edad (acepta valores de 18 a 40)"));
    while (edad[i] < 18 || edad[i] > 40) {
        edad[i] = parseInt(prompt("Ingrese un rango valido de edad (18-40)"));
    }
    i++;
}
var j = 0;
//calcular el porcentaje de hombres que no trabajan
var HombresNT = 0;
var PorcentajeHNT = 0;
while (j < sexo.length) {
    if (sexo[j] == 1 && trabajo[j] == 2) {
        HombresNT++;
    }
    j++;
}
PorcentajeHNT = (HombresNT * 100) / j;
//PORCENTAJE MUJERES NO TRABAJAN
var l = 0;
var MujeresNT = 0;
var PorcentajeMNT = 0;
while (l < sexo.length) {
    if (sexo[l] == 2 && trabajo[l] == 2) {
        MujeresNT++;
    }
    l++;
}
PorcentajeMNT = (MujeresNT * 100) / l;


//SUELDO PROMEDIO DE LOS HOMBRES
var k = 0;
var sueldoPH = 0;
while (k < sexo.length) {
    if (sexo[k] == 1) {
        sueldoPH = sueldoPH + sueldo[k];
    }
    k++;
}

sueldoPH = sueldoPH / k;

//SUELDO PROMEDIO DE MUJERES
var m = 0;
var sueldoPM = 0;
while (m < sexo.length) {
    if (sexo[m] == 2) {
        sueldoPM = sueldoPM + sueldo[m];
    }
    m++;
}
sueldoPM = sueldoPM / m;

//EDAD PROMEDIO DE LOS HOMBRES
var n = 0;
var EdadPH = 0;
while (n < sexo.length) {
    if (sexo[n] == 1) {
        EdadPH = EdadPH + edad[n];
    }
    n++;
}
EdadPH = EdadPH / n;

//EDAD PROMEDIO DE LAS MUJERES
var h = 0;
var EdadPM = 0;
while (h < sexo.length) {
    if (sexo[h] == 2) {
        EdadPM = EdadPM + edad[h];
    }
    h++;
}
EdadPM = EdadPM / h;

var opcion = 0;
opcion = parseInt(prompt("Ingrese la informacion que desea visualizar: \n 1. Porcentaje de mujeres que no trabajan \n 2. Sueldo promedio de los hombres \n 3. Sueldo promedio de las mujeres \n 4. Edad promedio de los hombres \n 5. Edad promedio de las mujeres \n 0.Salir"));
while (opcion < 1 || opcion > 5) {
    opcion = parseInt(prompt("Ingrese una opcion valida: \n 1. Porcentaje de mujeres que no trabajan \n 2. Sueldo promedio de los hombres \n 3. Sueldo promedio de las mujeres \n 4. Edad promedio de los hombres \n 5. Edad promedio de las mujeres \n"));
}

var q = 0;

switch (opcion) {
    case 1:
        document.write("<h2>El porcentaje de mujeres que no trabajan es: " + PorcentajeMNT + "%</h2>");
        document.write("_______________________________________________________________________________________________________________________________<br>");
        document.write("Sexo------Trabajo-----Sueldo-----Edad<br>");
        while (q < sexo.length) {
            if (sexo[q] == 2 && trabajo[q] == 2) {
                document.write(sexo[q] + "--------" + trabajo[q] + "---------" + sueldo[q] + "---------" + edad[q] + "<br>");
            }
            q++;
        }
        document.write("_______________________________________________________________________________________________________________________________<br>");

        break;
    case 2:
        document.write("<h2>El porcentaje de hombres que no trabajan es: " + PorcentajeHNT + "%</h2>");
        document.write("_______________________________________________________________________________________________________________________________<br>");
        document.write("Sexo------Trabajo-----Sueldo-----Edad<br>");
        while (q < sexo.length) {
            if (sexo[q] == 1 && trabajo[q] == 2) {
                document.write(sexo[q] + "--------" + trabajo[q] + "---------" + sueldo[q] + "---------" + edad[q] + "<br>");
            }
            q++;
        }
        document.write("_______________________________________________________________________________________________________________________________<br>");

        break;
    case 3:
        document.write("<h2>El sueldo promedio de mujeres es: " + sueldoPM + "</h2>");
        document.write("_______________________________________________________________________________________________________________________________<br>");
        document.write("Sexo------Trabajo-----Sueldo-----Edad<br>");
        while (q < sexo.length) {
            if (sexo[q] == 2 && trabajo[q] == 2) {
                document.write(sexo[q] + "--------" + trabajo[q] + "---------" + sueldo[q] + "---------" + edad[q] + "<br>");
            }
            q++;
        }
        document.write("_______________________________________________________________________________________________________________________________<br>");

        break;
    case 4:

        document.write("<h2>La edad promedio de hombres es: " + EdadPH + "</h2>");
        document.write("_______________________________________________________________________________________________________________________________<br>");
        document.write("Sexo------Trabajo-----Sueldo-----Edad<br>");
        while (q < sexo.length) {
            if (sexo[q] == 1 && trabajo[q] == 2) {
                document.write(sexo[q] + "--------" + trabajo[q] + "---------" + sueldo[q] + "---------" + edad[q] + "<br>");
            }
            q++;
        }
        document.write("_______________________________________________________________________________________________________________________________<br>");

        break;
    case 5:

        document.write("<h2>La edad promedio de mujeres es: " + EdadPM + "</h2>");
        document.write("_______________________________________________________________________________________________________________________________<br>");
        document.write("Sexo------Trabajo-----Sueldo-----Edad<br>");
        while (q < sexo.length) {
            if (sexo[q] == 1 && trabajo[q] == 2) {
                document.write(sexo[q] + "--------" + trabajo[q] + "---------" + sueldo[q] + "---------" + edad[q] + "<br>");
            }
            q++;
        }
        document.write("_______________________________________________________________________________________________________________________________<br>");

        break;
} 