function mostrar()
{
	/* Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */


	//tomo el mes



	var mesDelAño =txtIdMes.value;

	switch(mesDelAño){

		case"Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			alert("Ëste mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");
			break;


	}
	
	
	



}//FIN DE LA FUNCIÓN