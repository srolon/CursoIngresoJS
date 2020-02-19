function mostrar() {
    //tomo la edad  

    var edad;
    edad = document.getElementById("edad").value;

    //este es la version negada

    /*if (! (edad >= 13 && edad <= 17) ) {
        alert("usted no es adolescente");
    }*/
    
    // esta es la version con Or

    
    if (edad<13 || edad >17) {
        alert("usted no es adolescente");
    }
    




}//FIN DE LA FUNCIÓN