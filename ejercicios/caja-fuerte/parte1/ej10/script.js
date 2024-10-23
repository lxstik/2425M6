botonValidar = document.getElementById('botonValidar');
texto = document.getElementById('entrada');


botonValidar.addEventListener('click', function() {
    if(texto.value == ""){
        console.log("No hay texto");
    }else{
        console.log("Hay texto");
    }
});