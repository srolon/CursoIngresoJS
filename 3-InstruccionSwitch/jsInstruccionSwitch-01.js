function mostrar()

/* al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta*/



{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño){
		
		case"Enero":
		alert("Que comience bien el año!!!");
		break;
		case"Marzo":
		alert("a clases ");
		break;
		case"julio":
		alert("Se vienen las vacaciones!!!.");
		break;
		case"Diciembre":
		alert("felices fiestas");
		break;




	}



}//FIN DE LA FUNCIÓN