function mostrar()
{

	/* al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */




	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño){
		

		case"Febrero":
			alert("Este mes no tiene más de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 dias o más");
			break;	




	}
	
	


}//FIN DE LA FUNCIÓN