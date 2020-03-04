function mostrar() {
    var letra;
    var numero;
    var contadorDeNumerosPares = 0;
    var contadorDeNumerosImpares = 0;
    var contadorCeros = 0;
    var contadorNumerosPositivos = 0;
    var promediodeNumerosPositivos;
    var acumuladorNumerosPositivos = 0;
    var sumadeNumerosNegativos;
    var respuesta;
    var flagmin = 0;
    var flagmax = 0;

    do {

        letra = prompt("Ingrese una letra");

        while (!((letra >= "a" && letra <= "z") || (letra >= "Ä" && letra <= "Z"))) {
            letra = prompt("Dato incorrecto, ingrese una letra");
        }
        numero = prompt("Ingrese un numero");


        while (numero > 100 || numero < -100) {
            numero = parseInt(numero);
            isNaN(numero);
            prompt("Dato incorrecto, ingrese numero entre -100 a 100")
        }
        // punto A
        while (contadorDeNumerosPares)


            respuesta = prompt("Desea continuar (si/no)?")
    } while (respuesta == "si");








}
