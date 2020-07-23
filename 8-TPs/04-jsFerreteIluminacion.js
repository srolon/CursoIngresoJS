/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantidadLamparas;
    var precioLamparas = 35;
    var ImpuestoDelPrecio;
    var precioConDescuento;
    var marcaElegida;
    



    cantidadLamparas = txtIdCantidad.value;
    precioLamparas = parseInt(precioLamparas);
    precioConDescuento = cantidadLamparas*precioLamparas;
    marcaElegida = Marca.value;


     //Punto A

     if(cantidadLamparas > 5)
        {
        precioConDescuento = precioConDescuento*0.5;
        }

            // Punto B


     if(cantidadLamparas == 5 && marcaElegida == "ArgentinaLuz" ) 
        {
        precioConDescuento = precioConDescuento*0.4;
        }
         else 
        {
            precioConDescuento = precioConDescuento*0.3;
         }

         // Punto C

         if (cantidadLamparas == 4 && marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas")
             {
                 precioConDescuento = precioConDescuento*0.25;
             } 
             else {
                precioConDescuento = precioConDescuento*0.20;
             }
    

             // Punto D


             if(cantidadLamparas == 3 && marcaElegida == "ArgentinaLuz" )
             {
               
                precioConDescuento = precioConDescuento*0.15;
             } 

             if(cantidadLamparas == 3 && marcaElegida == "FelipeLamparas" )
             {
                precioConDescuento = precioConDescuento*0.10;
             }
             else {
                precioConDescuento = precioConDescuento*0.05;
             }
                

                // Punto E

                txtIdprecioDescuento.value = precioConDescuento;










            }

