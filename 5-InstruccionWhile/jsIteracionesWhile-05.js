/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese sexo entre f ó m .").toLowerCase();
	

	while(sexoIngresado != "m" && sexoIngresado!= "f")
	{
		sexoIngresado = prompt("ingrese sexo entre f ó m .").toLowerCase();
	}
	txtIdSexo.value=sexoIngresado;


}//FIN DE LA FUNCIÓN