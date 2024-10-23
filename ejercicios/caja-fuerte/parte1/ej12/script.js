botonComparar = document.getElementById('botonComparar');
var segundoNumero = 11;

botonComparar.addEventListener('click', function() {
    if(segundoNumero < 10){
        alert("El numero " + segundoNumero + " es MAS PEQUEÑO que 10");
    }else{
        alert("El numero " + segundoNumero + " es MAS GRANDE que 10");
    }
});