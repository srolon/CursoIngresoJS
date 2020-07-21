function mostrar()
{
	//tomo la edad  

	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad <13 || edad > 17) {

		alert("Usted No es adolescente");
	}


}//FIN DE LA FUNCIÓN