function mostrar()
{
	/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/




	//tomo la edad  

		var edad;
		edad = txtIdEdad.value;
		edad = parseInt(edad);

		if (edad > 17) {
		
		alert("Usted es mayor de edad")
		
		}else if(edad <13){
		
		alert("Usted es niño")

		}else if(edad > 12 && edad < 18){
		
		alert("Usted es adolescente");
	}



}//FIN DE LA FUNCIÓN