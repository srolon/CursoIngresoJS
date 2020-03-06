function mostrar() {

    var nota;
    var sexo;
    var acumuladordenotas = 0;
    var promediodenotas;
    var notamasbaja;
    var sexomasbajo;
    var contador = 0;
    var contadorvaronesmayora6 = 0;
    var flag =0;

    for (contador;contador<5;contador++){

    


    nota=parseInt(prompt("Ingrese nota deseada"));

    while( nota<0 || nota>10 || isNaN(nota) ) {
        nota=parseInt(prompt("Dato incorrecto, Ingrese nota deseada entre 0 y 10"));
        
        
    }

    sexo=prompt("Ingrese sexo deseado entre f o m");

    while ( sexo!= "f" && sexo!="m"){
         sexo=prompt("Dato incorrecto, ingrese sexo entre f o m");

    }
    acumuladordenotas= acumuladordenotas+nota;

    if (nota<notamasbaja || flag == 0){
        notamasbaja = nota;
        sexomasbajo = sexo;
        flag = 1;
    }

    if (sexo=="m" && nota>="6") {
        contadorvaronesmayora6++;

    }
    }

promediodenotas = acumuladordenotas/5;

alert("El promedio de las notas totales es : " + promediodenotas + "\n La nota más baja es : " + notamasbaja + "\n El sexo de la persona con la nota más baja es :" + sexomasbajo + "\n La cantidad de varones con nota mayor o igual a 6 es :" + contadorvaronesmayora6);



}
