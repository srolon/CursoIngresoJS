/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
    var descuento;

	sueldo = txtIdImporte.value;
	sueldo = parseInt (sueldo);
    descuento =  (sueldo * 25/100);
	resultado = sueldo - descuento;
	
	
	alert ("el descuento es : " + descuento );

	txtIdResultado.value = resultado;

	
	


}













