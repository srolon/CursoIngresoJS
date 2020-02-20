function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	

	while (contador > 1) {
		contador++;
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		// validar

		while (isNan(numero)) {
			numero = prompt(" ingrese un numero valido");
			numero = parseInt(numero);

		}

		//acumular
		acumulador + - numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN