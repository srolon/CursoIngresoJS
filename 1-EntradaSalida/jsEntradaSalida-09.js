/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var porcentajeDeAumento;
	var resultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	porcentajeDeAumento = 0.1;

	resultado = txtIdResultado.value;
	resultado = sueldo + porcentajeDeAumento;

	confirm("el suedo mas el 10 porciento es:" + resultado);


}
