document.querySelector('#btnCrearFicha').addEventListener('click', function(event) {
    //conservar el valor en vez de recargar la página
    event.preventDefault();
    
    //recoger valores
    var nombre = document.getElementById('inputNombre').value
    var apellido1 = document.getElementById('inputApellido1').value
    var apellido2 = document.getElementById('inputApellido2').value
    var dni = document.getElementById('inputDNI').value
    var imagen = document.getElementById('inputUrlImagen').value;
    console.log(nombre)


    //mover los valores a la ficha

    document.querySelector('#quienEs').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('#documento').innerHTML = dni;
    document.querySelector('#imagenUser').src = imagen;


})