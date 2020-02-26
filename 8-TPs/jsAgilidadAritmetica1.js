/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar() {
  
    var PrimerNumero;
    var SegundoNumero;
    var operador;
    var operadorRandom;

    PrimerNumero = Math.floor(Math.random() * (11 - 1) + 1);
    SegundoNumero = Math.floor(Math.random() * (11 - 1) + 1);

    operadorRandom = Math.Floor(Math.random() * (5 - 1) + 1);

     switch (operadorRandom)  {
        case 1:
        resultadoFinal = PrimerNumero + SegundoNumero;
        break;

        case 2:
        resultadoFinal = PrimerNumero - SegundoNumero;
        break;

        case 3:
        resultadoFinal = PrimerNumero * SegundoNumero;
        break;

        case 4:
        resultdoFinal = PrimerNumero / SegundoNumero;
        break;
        default:




    }
    





}//FIN DE LA FUNCIÓN
function Responder() {


}//FIN DE LA FUNCIÓN
