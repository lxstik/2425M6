arrayCoches = [
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: "1.500+ caballos de fuerza",
        motor: "8.0 litros W16",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWjcb5SZMd2ioaBWWseWdXHUgzoIyBU6sTA&s",
        comparacionPotencia: 1500
    },
    {
        nombre: "Koenigsegg Jesko",
        potencia: "1.600+ caballos de fuerza",
        motor: "V8 de 5.0 litros",
        imagen: "https://img.remediosdigitales.com/89b3aa/koenigsegg-jesko/1366_521.jpg",
        comparacionPotencia: 1600
    },
    {
        nombre: "Hennessey Venom F5",
        potencia: "1.800+ caballos de fuerza",
        motor: "V8 de 6.6 litros",
        imagen: "https://cdn.motor1.com/images/mgl/AkKbbP/s1/hennessey-venom-f5-revolution.jpg",
        comparacionPotencia: 1800
    },
    {
        nombre: "Rimac C_Two",
        potencia: "1.900+ caballos de fuerza",
        motor: "Eléctrico",
        imagen: "https://chanoine.fr/wp-content/uploads/2024/05/rimac-1.png",
        comparacionPotencia: 1900
    },
    {
        nombre: "Lamborghini Sian",
        potencia: "800+ caballos de fuerza",
        motor: "V12 híbrido",
        imagen: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/over/sian_body_01_m.jpg",
        comparacionPotencia: 800
    }
]



for(i = 0; i < 5; i++){
    //insertar informacion en las tarjetas
    //para buscar elementos con sus IDs e insertar los datos correspondientes moviendome con la variable "i"
    //imagenes
    document.getElementById(`cocheImg${i}`).src = arrayCoches[i].imagen
    //nombre
    document.getElementById(`cocheH${i}`).innerHTML = arrayCoches[i].nombre
    //potencia
    document.getElementById(`potenciaCoche${i}`).innerHTML = arrayCoches[i].potencia
    //motor
    document.getElementById(`motorCoche${i}`).innerHTML = arrayCoches[i].motor

    //insertar los nombres en campos de seleccion
    document.getElementById(`opcionIzqCoche${i}`).innerHTML = arrayCoches[i].nombre
    document.getElementById(`opcionDerCoche${i}`).innerHTML = arrayCoches[i].nombre
}



//comparar
document.querySelector('#comparar').addEventListener('click', function() {
    //para recoger el valor desde select
    cocheIzqSeleccionado = document.getElementById('select1').value
    cocheDerSeleccionado = document.getElementById('select2').value

    //control de errores
    if(cocheIzqSeleccionado == cocheDerSeleccionado){
        alert("Error")
    }else if(cocheIzqSeleccionado == 'Seleccionar' || cocheDerSeleccionado == 'Seleccionar'){
        alert("Error")
    }else{
        //insertar los nombres de los coches seleccionados
        document.getElementById('compararNombreCoche1').innerHTML = arrayCoches[cocheIzqSeleccionado].nombre
        document.getElementById('compararNombreCoche2').innerHTML = arrayCoches[cocheDerSeleccionado].nombre

        //insertar potencia de los coches seleccionados
        document.getElementById('compararPotenciaCoche1').innerHTML = arrayCoches[cocheIzqSeleccionado].potencia
        document.getElementById('compararPotenciaCoche2').innerHTML = arrayCoches[cocheDerSeleccionado].potencia

        //insertar los motores de los coches seleccionados
        document.getElementById('compararMotorCoche1').innerHTML = arrayCoches[cocheIzqSeleccionado].motor
        document.getElementById('compararMotorCoche2').innerHTML = arrayCoches[cocheDerSeleccionado].motor
    }
})




//buscar
document.querySelector('#buscar').addEventListener('click', function() {
    //Limpiar las Li's generadas anteriormente al clicar
    document.getElementById('busquedaUl').innerHTML = '';
    //recoger el numero introducido
    inputInfo = document.getElementById('buscarInput').value


    //comprobar 1 por 1 las potencias y sacar las que superan el numero introducido
    for (i = 0; i < arrayCoches.length; i++) {

        //control de errores
        if(inputInfo < 0){
            alert("No hay coches con esta potencia!!!")
            i = 5 // para salir del buscle porque sino la pagina se queda bugeada en un bucle constante y no se quita alert !!!!!!!!!!
        }else if (inputInfo < arrayCoches[i].comparacionPotencia) { //comparacion con cada coche en el array
            document.getElementById('busquedaUl').innerHTML += `<li>${arrayCoches[i].nombre} - ${arrayCoches[i].potencia}</li>`
        }
    }

    //para sacar la hora de la busqueda
    ahora = new Date()
    opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
    horaActual = ahora.toLocaleTimeString([], opciones)

    document.getElementById('busquedaFecha').innerHTML = `La busqueda fue realizada a las: ${horaActual}`
})