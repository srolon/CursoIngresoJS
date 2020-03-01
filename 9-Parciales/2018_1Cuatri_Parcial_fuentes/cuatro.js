function mostrar() {

    var numero1;
    var numero2;
    var operacion;


    numero1 = parseInt(prompt("numero1"));
    while (numero1  || isNaN(numero1)) {
        numero1 = prompt("Dato invalido, ingrese numero nuevamente");
    }

    numero2 = parseInt(prompt("numero2"));
    while (numero2 || isNaN(numero2)) {
        numero2 = prompt("Dato invalido, ingrese numero nuevamente");
    }

    if (numero1 == numero2) {
        alert(numero1 + "" + numero2);
    }
    else if (numero1 > numero2) {
        operacion = numero1 - numero2;
        alert(operacion);
    }
    else {

        operacion = numero1 + numero2;
        if (operacion > 10) {
            alert("la suma es:" + operacion + "y es mayor a 10");
        }else{
        alert(operacion);
        }

    }

}
