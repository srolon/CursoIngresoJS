/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
        var numero1;
        var resultado;
        var numeroparseado1;
        var porcentaje =1.1;

        numero1 = document.getElementById("sueldo").value;
        numeroparseado1= parseInt(numero1);
        resultado = numeroparseado1 * porcentaje ;
        document.getElementById("resultado").value = resultado
       
	
}
