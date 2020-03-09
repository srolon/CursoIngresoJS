Function mostrar() 
{


	var tipo;
	var precio;
	var cantidad;
	var cantidadMaximaBarbijo;
	var marca;
	var fabricante;
	var contador = 0;
	var acumuladorJabon = 0;
	var productoMaximo;
	var precioBarbijoMaximo;
	var flag = 0;
	var fabricanteMaximoBarbijo;
	var cantidadMaxima;
	var fabricanteCantidadMaximo;



	for (contador; contador < 5; contador++ ) {
		tipo = prompt("Ingrese tipo de insumo entre barbijo, jabon y alcohol");

		while (tipo != "jabon" && tipo != "alcohol" && tipo != "barbijo") {
			tipo = prompt("Dato invaido, ingrese tipo de insumo entre barbijo, jabon y alcohol");

		}
		precio = parseInt(prompt("Ingrese precio entre 100 y 300"));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseInt(prompt("Dato invalido, Ingrese precio entre 100 y 300"));

		}
		cantidad = parseInt(prompt("Ingrese cantidad entre 1 y 1000"));
		while (cantidad < 1 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Dato invalido, Ingrese cantidad entre 1 y 1000"));

		}

		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		// Punto A


		if ((tipo == "barbijo" && precio > precioBarbijoMaximo) || flag == 0) {
			precioBarbijoMaximo = precio;
			cantidadMaximaBarbijo = cantidad;
			fabricanteMaximoBarbijo = fabricante;


		}
		// Punto B

		if (cantidad > cantidadMaxima || flag == 0)
			cantidadMaxima = cantidad;
		fabricanteCantidadMaximo = fabricante;
		flag = 1;


		// Punto C

		if (tipo == "jabon") {
			acumuladorJabon = acumuladorJabon + cantidad;
		}


	}


	document.write("De los más caro de los barbijos la cantidad es : " + cantidadMaximaBarbijo +
		" y el fabricante de barbijos más caro es : " + fabricanteMaximoBarbijo + "</br>");
	document.write(" El fabricante con más unidades es : " + fabricanteCantidadMaximo + "</br>");
	document.write(" Las cantidades totales de jabón son  : " + acumuladorJabon + "</br>");


}















































	
}
