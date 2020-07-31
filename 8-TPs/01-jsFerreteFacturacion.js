/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

    //Este es el punto A

function Sumar () 
{

    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt( precioDos);
    precioTres = parseInt( precioTres);


    suma = precioUno + precioDos + precioTres;

alert("La suma es : " + suma);


	
}

//Esto pertenece al punto B//




function Promedio () 
{   
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt( precioDos);
    precioTres = parseInt( precioTres);


    suma = precioUno + precioDos + precioTres;
    promedio = suma/3;


alert("El promedio de la suma de los 3 numeros  es : " + promedio);

}

// Esto pertenece al punto C//

function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var iva =0.21;
    var precioFinal;
  
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    

    precioUno = parseInt(precioUno);
    precioDos = parseInt( precioDos);
    precioTres = parseInt( precioTres);

    precioFinal = (precioUno + precioDos + precioTres) * iva;

    alert("El precio final de la suma de los 3 productos es: " + precioFinal);


	
}