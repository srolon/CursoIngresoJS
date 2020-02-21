function mostrar()
{
//tomo la edad  

var edad;
var estadocivil;
edad=document.getElementById("edad").value;
edad=parseint(edad);
estadocivil= document.getElementById("estadoCivil").value;


if ( edad<18 && estadocivil !="Soltero") {
    alert("usted es muy joven para no ser Soltero");
}



	


}//FIN DE LA FUNCIÓN