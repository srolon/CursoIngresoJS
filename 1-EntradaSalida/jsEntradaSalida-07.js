/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	


	var numeroUno;
	var numeroDos;
	var suma;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	suma = numeroUno + numeroDos;
	
	
	
	
		alert("El resultado es : " + sumar);
	}



function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	resta = numeroUno - numeroDos;

	alert("El resultado es : " + resta);
	
}

function multiplicar()
{ 

	var numeroUno;
	var numeroDos;
	var multiplicacion;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	multiplicacion = numeroUno * numeroDos;

	alert("El resultado es : " + multiplicacion);
	
	
}

function dividir()
{

	var numeroUno;
	var numeroDos;
	var division;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	division = numeroUno / numeroDos;

	alert("El resultado es : " + division);
	




	
}

