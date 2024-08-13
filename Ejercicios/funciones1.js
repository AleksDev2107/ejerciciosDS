var inicio=parseInt(prompt("Ingrese el valor incial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor final de la tabla"));

function Tablita(inicio,fin){

    let valor = parseInt(prompt("Ingrese que tabla de multiplicar quiere obtener"));
    if(inicio<=fin){
        document.write("Mostrando el contenido de forma ascendente <br>");
        for(let f = inicio; f <= fin; f++){
            let tabla = f * valor;
            document.write(f + " x " + valor + " = " + tabla + "<br>");
    }
    }
    else{
        document.write("Mostrando el contenido de forma descendente <br>");
        for(let f = inicio; f >= fin; f--){
            var tabla = f * valor;
            document.write(f + " x " + valor + " = " + tabla + "<br>");
        }
    }
}