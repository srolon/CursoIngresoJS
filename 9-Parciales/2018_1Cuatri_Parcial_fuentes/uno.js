
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;



    largo = prompt("ingrese el largo");
    largo = parseInt(largo);

    while(largo < 1 || isNaN(largo)) {
        largo = prompt("Dato erroneo,ingrese el largo nuevamente");
         largo = parseInt(largo);
        
    }

    ancho = prompt("ingrese el ancho");
    ancho = parseInt(ancho);

    while(ancho < 1 || isNaN(ancho)) {
        ancho = prompt("Dato erroneo,ingrese el ancho nuevamente");
        ancho = parseInt(ancho);
        
    }


perimetro = largo*2 + ancho*2

alert("El perimetro es: " + perimetro);



}
