function mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;
edad=parseInt(edad);

if (edad<18 && estadoCivil !="Soltero") {
alert("Es muuy pequeño para no estar soltero");
}

	


}//FIN DE LA FUNCIÓN