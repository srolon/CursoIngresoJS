function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "enero":
        alert("que comiences bien el año");
        break;
    case "Marzo":
    alert("A clases");
    break;
    case "julio":
    alert("Se vienen las vacaciones");
    case  "diciembre":
    alert ("Felices fiestas");
    default:
    alert("no hay un evento reconocido en este break");


}
    



}
//FIN DE LA FUNCIÓN