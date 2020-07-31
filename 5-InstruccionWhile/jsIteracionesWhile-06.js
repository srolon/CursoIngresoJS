function mostrar()
{


	/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/


	var i = 0;
	var acumulador = 0;
	var numeroIngresado;
	var promedio;

	while ( i < 5 ) 
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado))
		{		
			numeroIngresado = prompt("Eso no es un numero, reingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		}

		acumulador = acumulador + numeroIngresado;
		


		i++;
	} 

	promedio = acumulador/5;

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN