/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while (!( numeroIngresado >= 0 && numeroIngresado <= 9)) 
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}








	
}//FIN DE LA FUNCIÓN