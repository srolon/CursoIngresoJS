function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = 'si';

	while (respuesta) {

		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Error. Ingrese un numero valido");
			numero = parseInt(numero);
		}

		// operaciones
		if (numero >= 0) {
			positivo += numero;
			//positivo = positivo+ numero;

		} else {
			negativo *= numero;
			contador++;

		}
		respuesta = confirm("Desea continuar");
	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

} //FIN DE LA FUNCIÓN