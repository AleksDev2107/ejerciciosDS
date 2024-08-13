//declarando variable
let sevicio, pago, costo, frecuente, descuento;
//captura de datos
servicio = parseInt(prompt("Seleccione el servicio deseado: " + "\n" +
    "1. Alisado" + "\n" +
    "2. Uñas" + "\n" +
    "3. Tinte" + "\n" +
    "4. Corte" + "\n" +
    "5. Pies"
));
while (servicio < 1 || servicio > 5) {
    servicio = parseInt(prompt("Seleccione el servicio deseado: " + "\n" +
        "1. Alisado" + "\n" +
        "2. Uñas" + "\n" +
        "3. Tinte" + "\n" +
        "4. Corte" + "\n" +
        "5. Pies"
    ));
};

forma = parseInt(prompt("Ingrese la forma de pago: " + "\n" +
    "1. Credito" + "\n" +
    "2. Efectivo"
));

while (forma < 1 || forma > 2) {
    forma = parseInt(prompt("Ingrese una opcion vaLida de pago: " + "\n" +
        "1. Credito" + "\n" +
        "2. Efectivo"
    ));
};

frecuente = parseInt(prompt("Tiene tarjteta de cliente frecuente?" + "\n" +
    "1. Si" + "\n" +
    "2. No"
))

while (frecuente < 1 || frecuente > 2) {
    frecuente = parseInt(prompt("Tiene tarjteta de cliente frecuente?" + "\n" +
        "1. Si" + "\n" +
        "2. No"
    ))
}

switch (servicio) {
    case 1:
        costo = 50;

        break;
    case 2:
        costo = 25;
        break;
    case 3:
        costo = 35;
        break;
    case 4:
        costo = 10;
        break;
    case 5:
        costo = 15;
        break;
};

//impresión
    //SI EL CLIENTE ES FRECUENTE

if (forma == 1 && servicio == 1) {

    document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo.toFixed(2)) + "<br>")
    document.write("el pago total será de: " + (descuento.toFixed(2)));

}
else if (forma == 1 && servicio == 2) {
    document.write("Usted se realizo un uñas<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));
    


} else if (forma == 1 && servicio == 3) {
    document.write("Usted se realizo un tinte<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo.toFixed(2)) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));
    


} else if (forma == 1 && servicio == 4) {
    document.write("Usted se realizo un corte<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));  


} else if (forma == 1 && servicio == 5) {
    document.write("Usted se realizo los pies <br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento.toFixed(2)));
    
}else if (forma == 2 && servicio == 1) {
    document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("el pago total será de: " + (costo).toFixed(2));
    
}else if (forma == 2 && servicio == 2) {
    document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("el pago total será de: " + (costo).toFixed(2));
    
}else if (forma == 2 && servicio == 3) {
       document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("el pago total será de: " + (costo).toFixed(2));
    

}else if (forma == 2 && servicio == 4) {
        document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("el pago total será de: " + (costo).toFixed(2));
    
}else if (forma == 2 && servicio == 5) {
        document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("el pago total será de: " + (costo).toFixed(2));
}
     if (forma == 1 && servicio == 1) {
    document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo.toFixed(2)) + "<br>")
    document.write("el pago total será de: " + (descuento.toFixed(2)));

}

else if (forma == 1 && servicio == 2) {
    document.write("Usted se realizo un uñas<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));
    


} else if (forma == 1 && servicio == 3) {
    document.write("Usted se realizo un tinte<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo.toFixed(2)) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));
    


} else if (forma == 1 && servicio == 4) {
    document.write("Usted se realizo un corte<br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento).toFixed(2));
    


} else if (forma == 1 && servicio == 5) {
    document.write("Usted se realizo los pies <br>");
    document.write("usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inical del servicio es de: " + costo.toFixed(2) + "<br>");
    document.write("El descuento por cliente frecuente es de 25% "+ (costo*0.25).toFixed(2)+"<br>");
    costo=costo*1.10;
    descuento=costo*0.75;
    document.write("Se le hará un recargo del 10% " + (costo).toFixed(2) + "<br>")
    document.write("el pago total será de: " + (descuento.toFixed(2)));
//FIN SI NO ES FRECUENTE

    //INICIO SI ES FRECUENTE

    //FIN SI EL CLIENTE ES FRECUENTE

    //SI EL CLIENTE NO ES FRECUENTE

} else if (forma == 2 && servicio == 1) {
        document.write("Usted se realizo un alisado<br>");
    document.write("usted ha cancelado con efectivo<br>");
    document.write("el pago total será de: " + (costo).toFixed(2));
} else if (forma == 2 && servicio == 2) {
        document.write("Usted se realizo un alisado<br>");
     document.write("usted ha cancelado con efectivo<br>");
    document.write("el pago total será de: " + (costo).toFixed(2));
} else if (forma == 2 && servicio == 3) {
        document.write("Usted se realizo un alisado<br>");
     document.write("usted ha cancelado con efectivo<br>");
    document.write("el pago total será de: " + (costo).toFixed(2));

} else if (forma == 2 && servicio == 4 ) {
        document.write("Usted se realizo un alisado<br>");
     document.write("usted ha cancelado con efectivo<br>");
    document.write("el pago total será de: " + (costo).toFixed(2));
} else if (forma == 2 && servicio == 5 ) {
        document.write("Usted se realizo un alisado<br>");
     document.write("usted ha cancelado con efectivo<br>");
    document.write("el pago total será de: " + (costo).toFixed(2));
}


//FIN SI ES FRECUENTE
//INICIO SI NO ES FRECUENTE

   