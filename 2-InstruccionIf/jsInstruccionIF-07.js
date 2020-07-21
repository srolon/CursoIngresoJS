function mostrar()
{ /* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

var edad;
var estadoCivil;

edad = txtIdEdad.value;
edad = parseInt(edad);
estadoCivil = estadoCivil.value;


if (edad < 18 && estadoCivil != "Soltero" ){

	alert("Usted es muy pequeño para No ser soltero")
}


	
	


}//FIN DE LA FUNCIÓN