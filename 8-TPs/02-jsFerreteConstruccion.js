/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 

//Punto A
{

    var largoTerreno;
    var anchoTerreno;
    var superficieTotal;
    var cantidadAlambre;
    

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    
    superficieTotal = anchoTerreno*2 + largoTerreno*2;

    cantidadAlambre = (superficieTotal)*3;



    alert("La cantidad de alambre a utilizar para cubrir el terreno es: " + cantidadAlambre );
    
} 

    // Punto B

function Circulo () 
{
   
    var radio;
    var cantidadAlambre;

    radio = txtIdRadio.value;
    cantidadAlambre = (radio*(2*3.14))*3;


    
    alert("La cantidad de alambre a utilizar para cubrir el terreno es: " + cantidadAlambre );


	
}

   
//Punto C

function Materiales () 
{
    var cemento;
    var cal;

    var largoTerreno;
    var anchoTerreno;
    var superficieTotal;
    

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    
    superficieTotal = anchoTerreno*2 * largoTerreno*2;

    cemento = (superficieTotal * 2) / 4;
    cal = (superficieTotal * 3) / 4;

    alert("La cantidad de bolsas de cemento a utilizar es: " + cemento + " y la cantidad bolsas de cal es : " + cal  );



}