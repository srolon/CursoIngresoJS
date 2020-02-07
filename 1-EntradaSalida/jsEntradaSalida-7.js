/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	        
        var numero1;
        var numero2;
        var suma;
        var resultado;
        var numeroparseado1;
        var numeroparseado2;

        numero1 = document.getElementById("numeroUno").value;
        numero2 = document.getElementById("numeroDos").value;
        numeroparseado1= parseInt(numero1);
        numeroparseado2= parseInt(numero2);
        suma =numeroparseado1 + numeroparseado2;
        alert(" el resultado es " + suma);       
}

function restar()
{
	 var numero1;
        var numero2;
        var resta;
        var resultado;
        var numeroparseado1;
        var numeroparseado2;

        numero1 = document.getElementById("numeroUno").value;
        numero2 = document.getElementById("numeroDos").value;
        numeroparseado1= parseInt(numero1);
        numeroparseado2= parseInt(numero2);
        resta = numeroparseado1 - numeroparseado2;
        alert(" el resultado es " + resta); 
}

function multiplicar()
{ 
	    var numero1;
        var numero2;
        var multiplicacion;
        var resultado;
        var numeroparseado1;
        var numeroparseado2;

        numero1 = document.getElementById("numeroUno").value;
        numero2 = document.getElementById("numeroDos").value;
        numeroparseado1= parseInt(numero1);
        numeroparseado2= parseInt(numero2);
        multiplicacion = numeroparseado1 * numeroparseado2;
        alert(" el resultado es " + multiplicacion); 
}


function dividir()
{
        var numero1;
        var numero2;
        var division;
        var resultado;
        var numeroparseado1;
        var numeroparseado2;

        numero1 = document.getElementById("numeroUno").value;
        numero2 = document.getElementById("numeroDos").value;
        numeroparseado1= parseInt(numero1);
        numeroparseado2= parseInt(numero2);
        division = numeroparseado1 / numeroparseado2;
        alert(" el resultado es " + division); 
}
	


