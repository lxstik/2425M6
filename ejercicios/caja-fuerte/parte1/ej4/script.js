boton = document.getElementById('boton');

boton.addEventListener('click', function() {
    var numeroRandom = Math.random() * 100;
    numeroRandom = Math.floor(numeroRandom);

    texto = document.getElementById('resultat');
    texto.innerHTML = "Número aleatori: " + numeroRandom
});