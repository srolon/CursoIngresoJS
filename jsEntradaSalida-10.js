/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
     	var numero1;
        var resultado;
        var numeroparseado1;
        var porcentaje =0.75;

        numero1 = document.getElementById("importe").value;
        numeroparseado1= parseInt(numero1);
        resultado = numeroparseado1 * porcentaje ;
        document.getElementById("resultado").value = resultado
       
	
}
