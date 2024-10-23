imagen = document.querySelector("#imatge");
mostrarSrc = document.getElementById("mostrarSrc");
resultado = document.getElementById("resultat");

mostrarSrc.addEventListener('click', function() {
    resultado.innerHTML = imagen.getAttribute('src');
});
