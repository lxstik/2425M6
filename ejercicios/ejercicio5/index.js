// empezar contador
let contadorUsuarios = 1;

document.querySelector('#btnCrearFicha').addEventListener('click', function(event) {
    // no recargar la pagina
    event.preventDefault();
    
    // recoger los valores del formulario
    var nombre = document.getElementById('inputNombre').value;
    var apellido1 = document.getElementById('inputApellido1').value;
    var apellido2 = document.getElementById('inputApellido2').value;
    var dni = document.getElementById('inputDNI').value;
    var imagen = document.getElementById('inputUrlImagen').value;

    // mover valores a la ficha
    document.querySelector('#quienEs').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('#documento').innerHTML = `DNI: ${dni}`;
    document.querySelector('#imagenUser').src = imagen;

    // agregar nuevo usuario 
    var nuevaFila = `<tr>
                        <td>${contadorUsuarios++}</td>
                        <td><img width="30" src="${imagen}" alt=""></td>
                        <td>${nombre}</td>
                        <td>${apellido1} ${apellido2}</td>
                        <td>${dni}</td>
                    </tr>`;
    
    //meter info con html
    document.querySelector('#usuarios').innerHTML += nuevaFila;

});
