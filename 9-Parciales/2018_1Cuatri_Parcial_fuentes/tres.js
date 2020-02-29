function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    precio = parseInt(prompt("Ingrese precio"));
    

    while( precio < 1 ||  isNaN(precio) ) {
        precio = prompt("Dato invalido, ingrese precio nuevamente");
    }
    
    porcentajeDeDescuento = parseInt(prompt("Ïngrese porcentaje de descuento" ));
    
    while( porcentajeDeDescuento < 0 ||  isNaN(porcentajeDeDescuento) ) {
        porcentajeDeDescuento = prompt("Dato invalido, ingrese porcentaje de descuento nuevamente");


    }

    descuento = precio*porcentajeDeDescuento/100;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;






}
