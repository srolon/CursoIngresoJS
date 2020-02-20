function mostrar() {

	var contador = 0;
	var acumulador = 0;

	while (contador < 5) {
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



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN