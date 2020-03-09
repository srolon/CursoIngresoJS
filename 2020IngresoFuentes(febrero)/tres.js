function mostrar() {

	var respuesta;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var hombreCasadoMasJoven;
	var nombreCasadoMasJoven
	var pasajeroMasViejo;
	var promedioEdad;
	var pasajeroMasViejo;
	var nombrePasajeroMasViejo;
	var sexoPasajeroMasViejo;
	var acumuladorMujeres = 0;
	var acumuladorHombres = 0;
	var promedioHombresSolteros;
	var contadorHombresSolteros = 0;
	var promedioMujeres;
	var flag = 0;
	var contadorMujeres = 0;
	var contadorMujeresCasadas = 0;
	do {


		nombre = prompt("Ingrese nombre");

		edad = parseInt(prompt("Ingrese edad"));

		while (edad < 18) {
			edad = parseInt(prompt("Ingrese edad mayor a 18 anios"));
		}

		sexo = prompt("ingrese sexo entre f o m");

		while (sexo != "f" && sexo != "m") {
			sexo = prompt("dato incorrecto, ingrese sexo entre f o m ");
		}

		estadoCivil = prompt("Ingrese estado civil (casado, viudo o soltero)")

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Dato incorrecto, Ingrese estado civil entre, soltero, casado y viudo");
		}

		if ((sexo == "m" && estadoCivil == "casado" && edad < hombreCasadoMasJoven) || flag == 0) {
			hombreCasadoMasJoven = edad;
			nombreCasadoMasJoven = nombre;

		}
		if (edad > pasajeroMasViejo || flag == 0) {
			pasajeroMasViejo = edad;
			nombrePasajeroMasViejo = nombre;
			sexoPasajeroMasViejo = sexo;
			flag = 1;
		}

		if (sexo == "f" && (estadoCivil == "viuda" || estadoCivil == "casada")) {
			contadorMujeresCasadas++;

		}
		if (sexo == "f") {
			acumuladorMujeres = acumuladorMujeres + edad;
			contadorMujeres++;

		}

		if (sexo == "m" && estadoCivil == "soltero") {
			acumuladorHombres = acumuladorHombres + edad;
			contadorHombresSolteros++;

		}




		respuesta = prompt("Desea continuar? (s para continuar)");




	} while (respuesta == "s");



	promedioMujeres = acumuladorMujeres / contadorMujeres;
	promedioHombresSolteros = acumuladorHombres / contadorHombresSolteros;


	document.write("El nombre del casado más joven es : " + nombreCasadoMasJoven + "</br>");
	document.write("El sexo del pasajero/a más viejo es  : " + sexoPasajeroMasViejo + "</br>");
	document.write("Cantidad de mujeres casadas o viudas es : " + contador + "</br>");
	document.write("El promedio de mujeres es : " + promedioMujeres + "</br>");
	document.write("El promedio de edad entre los hombres solteros es : " + promedioHombresSolteros + "</br>");




}
