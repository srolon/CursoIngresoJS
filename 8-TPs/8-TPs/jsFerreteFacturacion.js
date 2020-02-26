/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {



    var precioUno;
    var PrecioDos;
    var precioTres;
    var precioparseado1;
    var precioparseado2;
    var precioparseado3;
    var suma;

    precioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioparseado1 = parseInt(precioUno);
    precioparseado2 = parseInt(PrecioDos);
    precioparseado3 = parseInt(precioTres);
    suma = precioparseado1 + precioparseado2 + precioparseado3;

    alert("El resultado es : " + suma);





}
function Promedio() {


    var precioUno;
    var PrecioDos;
    var precioTres;
    var precioparseado1;
    var precioparseado2;
    var precioparseado3;
    var promedio;

    precioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioparseado1 = parseInt(precioUno);
    precioparseado2 = parseInt(PrecioDos);
    precioparseado3 = parseInt(precioTres);
    promedio = (precioparseado1 + precioparseado2 + precioparseado3) / 3;

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