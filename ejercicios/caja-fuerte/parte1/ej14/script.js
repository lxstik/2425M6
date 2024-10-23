eliminarAlt = document.getElementById('eliminarAlt');
imagen = document.querySelector("#imatge");

eliminarAlt.addEventListener('click', function() {
    imagen = imagen.setAttribute('alt', '');
});
