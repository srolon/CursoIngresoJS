function mostrar() {



  var respuesta;
  var peso;
  var precioXKg;
  var tipo;
  var precio;
  var importeTotal=0;
  var descuento;
  var acumuladorPrecioXKg = 0;
  var contadorPrecioXKg = 0;
  var promedioPrecioXKg;
  var precioXKgCaro;
  var tipoCaro;
  var flag = 0;




  do {
    peso = parseInt(prompt("Ingrese peso entre 10 y 1000"));
    while (isNaN(peso) || peso < 10 || peso > 1000) {
      peso = parseInt(prompt("Dato incorrecto, ingrese peso entre 10 y 1000"));
    }
    precioXKg = parseInt(prompt("Ingrese precio por kilo mayor a cero"));
    while (isNaN(precioXKg) || precioXKg < 0) {
      precioXKg = parseInt(prompt("Dato incorrecto, Ingrese precio por kilo mayor a cero"));
    }
    tipo = prompt("Ingrese tipo");
    while (tipo != "v" && tipo != "a" && tipo != "m") {
      tipo = prompt("Dato incorrecto, ingrese dato entre v, a o m");

    }




    precio = precioXKg * peso;

    importeTotal = importeTotal + precio;

    if (precioXKg > precioXKgCaro || flag == 0) {
      precioXKgCaro = precioXKg;
      tipoCaro = tipo;
      flag = 1;
    }

    acumuladorPrecioXKg = acumuladorPrecioXKg + precioXKg;
    contadorPrecioXKg++;





    respuesta = prompt("Desea continuar (s para continuar)");

  } while (respuesta == "s");


  if (peso > 300) {
    descuento = importeTotal - (importeTotal * 0.25);
  } else if (peso > 100) {
    descuento = importeTotal - (importeTotal * 0.15);
  }

  promedioPrecioXKg = acumuladorPrecioXKg / contadorPrecioXKg;



  document.write("El importe total a pagar, bruto sin descuento es: " + importeTotal + "</br>");
  if (descuento > 0) {
    document.write("El importe total a pagar, bruto con descuento es: " + descuento + "</br>");
  }
  document.write("El tipo de alimento mas caro es: " + tipoCaro + "</br>");
  document.write("El promedio de precio por kilo total es: " + promedioPrecioXKg + "</br>");




}
