function mostrar() {


    var altura;
    var sexo;
    var acumuladorDeAlturas = 0
    var promedioDeAlturas;
    var alturaMinima;
    var contador = 0;
    var contadorMujeresAltas = 0;
    var sexoMinimo;
    flag = 0;


    for (contador; contador < 5; contador++) {



        altura = parseInt(prompt("ingrese altura en centimetros entre 0 y 250"));


        while (altura < 0 || altura > 250 || isNaN(altura)) {
            altura = prompt("dato incorrecto, ingrese altura entre 0 y 250");

        }

        sexo = prompt("ingrese sexo deseado");

        while (sexo != "f" && sexo != "m") {
            sexo = prompt("dato incorrecto, ingrese sexo entre f o m");


        }

        acumuladorDeAlturas = acumuladorDeAlturas + altura;

        // manera de sacar altura minima y sexo.


        if (altura < alturaMinima || flag == 0) {
            alturaMinima = altura;
            sexoMinimo = sexo;
            flag = 1;

        }

        if (sexo = "f" && altura >= 190) {
            contadorMujeresAltas++



        }
    }

    promedioDeAlturas = acumuladorDeAlturas / 5;
    alert("la altura promedio es : " + promedioDeAlturas + "\n la altura mínima es: " + alturaMinima +
        "\n el sexo de la altura mínima es : " + sexoMinimo + "\n la cantidad de mujeres altas es: " + contadorMujeresAltas);

}
