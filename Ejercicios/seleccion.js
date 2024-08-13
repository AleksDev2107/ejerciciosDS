//Declarando las variables
let servicio, forma, costo, cliente, descuento;
//Captura de Datos 
alert("Servicios Disponibles:")
servicio=parseInt(prompt("Seleccione su Servicio \n 1:Alisados \n 2:Uñas \n 3:Tintes \n 4:Pestañas \n 5:Cejas" ));
while(servicio<1 || servicio>5)
    {
        servicio=parseInt(prompt("Ingrese correctamente su servicio: \n 1:Alisados \n 2:Uñas \n 3:Tintes \n 4:Pestañas \n 5:Cejas"));
    }
    forma=parseInt(prompt("Ingrese la forma de pago: \n 1:Credito \n2:Efectivo"));

    while(cliente<1 || cliente>2)
    {
        cliente=parseInt(prompt("Ingrese correctamente la respuesta de pago: \n 1:si \n 2:no " ));
    }
    while(forma<1 || forma>2)
        {
            forma=parseInt(prompt("Ingrese correctamente la forma de pago: \n 1:Credito \n 2:Efectivo " ));
        }
        switch(servicio)
        {
          case 1:costo
          {
            costo=50;
            break;
          }
          case 2:
            {
                costo=25;
                break;
            }
              case 3:                       
                {
                costo=35;
                break;
                }
                case 4:
                    {
                        costo=45;
                        break;
                    }
                    default:
                        {
                            costo=50;
                            break;
                        }

        }//Fin SW

        //Impresion
        //Forma de pago 1
        if(forma==1 && servicio==1)
        {
          document.write("Usted se hizo un alisado <br>");
          document.write("Usted ha cancelado con tarjeta de credito <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("Se le hara un recargo de 10% <br>"+(costo*0.10));
          document.write("El pago total sera de"+(costo*1.10));
          
          cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));

          

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
            costo=costo*1.10;
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}

        }
        else if(forma==1 && servicio==2)
        {
          document.write("Usted se hizo un uñas <br>");
          document.write("Usted ha cancelado con tarjeta de credito <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("Se le hara un recargo de 10% <br>"+(costo*0.10));
          document.write("El pago total sera de"+(costo*1.10));
                 
          

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
            costo=costo*1.10;
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }
        else if(forma==1 && servicio==3)
        {
          document.write("Usted se hizo un Tintes <br>");
          document.write("Usted ha cancelado con tarjeta de credito <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("Se le hara un recargo de 10% <br>"+(costo*0.10));
          document.write("El pago total sera de"+(costo*1.10));
                 
          

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
            costo=costo*1.10;
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }
        else if(forma==1 && servicio==4)
        {
            document.write("Usted se hizo las cejas <br>");
            document.write("Usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo es de:"+costo+"<br>");
            document.write("Se le hara un recargo de 10% <br>"+(costo*0.10));
            document.write("El pago total sera de"+(costo*1.10));
                   
            

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
            costo=costo*1.10;
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }
        else if(forma==1 && servicio==5)
        {
          document.write("Usted se hizo las pestañas <br>");
          document.write("Usted ha cancelado con tarjeta de credito <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("Se le hara un recargo de 10% <br>"+(costo*0.10));
          document.write("El pago total sera de"+(costo*1.10));
                 
          

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
            costo=costo*1.10;
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }

        //Forma de pago 2
        if(forma==2 && servicio==1)
        {
          document.write("Usted se hizo un alisado <br>");
          document.write("Ustes ha cancelado en efectivo <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("El pago total sera de"+costo);
                 
                           cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));
          

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {

            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }
        else if(forma==2 && servicio==2)
        {
          document.write("Usted se hizo las uñas <br>");
          document.write("Ustes ha cancelado en efectivo <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("El pago total sera de"+costo);
                 
                    cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {

            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}
        }
        else if(forma==2 && servicio==3)
        {
          document.write("Usted se hizo un Tinte <br>");
          document.write("Ustes ha cancelado en efectivo <br>")
          document.write("El costo es de:"+costo+"<br>");
          document.write("El pago total sera de"+costo); 
                 
                    cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
 
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {} 
        }
        else if (forma==2 && servicio==4)
        {
            document.write("Usted se hizo las pestañas <br>");
            document.write("Ustes ha cancelado en efectivo <br>")
            document.write("El costo es de:"+costo+"<br>");
            document.write("El pago total sera de"+costo);
                             cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));
            

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
         
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}     
        }
        else if (forma==2 && servicio==5)
        {
            document.write("Usted se hizo las cejas <br>");
            document.write("Ustes ha cancelado en efectivo <br>")
            document.write("El costo es de:"+costo+"<br>");
            document.write("El pago total sera de"+costo); 

                      cliente=parseInt(prompt("¿Usted es cliente frecuente? \n 1:si \n 2:no"));

          while(cliente<1 || cliente>2)
          {
          cliente=parseInt(prompt("Elija entre la opcion 1 y 2, \n 1:si o 2:no"));

          }
          if (cliente==1)
          {
     
            descuento=costo*0.75;
          document.write("<br> Con la tarjeta se le hace un descuente del 25%, el total a pagar es <br>"+(descuento));
          }
          else
          {}  
        }

