function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */


		var nota;
		nota=Math.floor(Math.random()*(11-1))+1;
		console.log(nota);
		if(nota >8 ){ 
			alert("EXCELENTE");
		
		} else {
			
		}
		
		if(nota > 3)
		{
			 alert("APROBO");
		}

		else
		{
			alert("Vamos, la proxima se puede");
		}


}//FIN DE LA FUNCIÓN