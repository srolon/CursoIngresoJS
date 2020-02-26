/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {



    var precioUno;
    var PrecioDos;
    var precioTres;
    var precioparciado1;
    var precioparciado2;
    var precioparciado3;
    var resultado;

    precioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioparciado1 = parseInt(precioUno);
    precioparciado2 = parseInt(PrecioDos);
    precioparciado3 = parseInt(precioTres);
    suma = precioparciado1 + precioparciado2 + precioparciado3;

    alert("El resultado es : " + suma);





}
function Promedio() {


    var precioUno;
    var PrecioDos;
    var precioTres;
    var precioparciado1;
    var precioparciado2;
    var precioparciado3;
    var promedio;

    precioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioparciado1 = parseInt(precioUno);
    precioparciado2 = parseInt(PrecioDos);
    precioparciado3 = parseInt(precioTres);
    promedio = (precioparciado1 + precioparciado2 + precioparciado3) / 3;

    alert("El resultado es : " + promedio);
}
function PrecioFinal() {

    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;



    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres= parseInt(precioTres);
    precioFinal= (precioUno + precioDos + precioTres + (precioUno + precioDos + precioTres  )  *21/100);

    alert("El precio final con iva incluido es: " + precioFinal);

}