quiz = [
    {
        pregunta : "Que etiqueta utilizamos para una lista?",
        respuestas : ["ol", "ul", "table", "patata"],
        correcta : 1
    },
    

    {
        pregunta : "¿Qué etiqueta HTML utilizamos para un enlace?",
        respuestas : ["a", "link", "href", "p"],
        correcta : 0
    },
    {
        pregunta : "¿Cuál es el lenguaje que se utiliza principalmente para darle estilo a las páginas web?",
        respuestas : ["JavaScript", "Python", "CSS", "HTML"],
        correcta : 2
    },
    {
        pregunta : "¿Cuál es la etiqueta HTML para insertar una imagen?",
        respuestas : ["div", "img", "picture", "src"],
        correcta : 1
    },
    {
        pregunta : "¿Qué significa HTML?",
        respuestas : ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Transfer Markup Language"],
        correcta : 0
    },
    {
        pregunta : "¿Qué etiqueta HTML se utiliza para definir un encabezado de nivel 1?",
        respuestas : ["header", "h1", "h2", "title"],
        correcta : 1
    },
    {
        pregunta : "¿Cuál es el formato correcto para un comentario en HTML?",
        respuestas : [" Comentario ", "// Comentario?", '!Comentario¡', "# Comentario"],
        correcta : 2
    },
    {
        pregunta : "¿Qué significa CSS?",
        respuestas : ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correcta : 1
    },
    {
        pregunta : "¿Cuál es la propiedad CSS que se utiliza para cambiar el color de fondo?",
        respuestas : ["font-color", "bg-color", "background-color", "color"],
        correcta : 2
    },
    {
        pregunta : "¿Qué etiqueta se utiliza para un párrafo en HTML?",
        respuestas : ["p", "para", "paragraph", "text"],
        correcta : 0
    }
        
]

//generar un numero aleatorio
let quizIndex = Math.floor(Math.random() * 10)

//variable correctas/incorrectas para ir sumando las acertadas e incorrectas. Variable nueva para bloquear posibilidad de clicar la misma opcion/otra en el futuro
let correctas = 0
let incorrectas = 0
var nueva = false

//variable de divpoint para saber en que posicion estamos de 1 a 20
let divpoint = 1

// Cargar pregunta
function cargarPregunta() {
    //definir una variable para el numero aleatorio
    let random
    //generar un nuevo número aleatorio que no sea igual al anterior
    do {
        random = Math.floor(Math.random() * 10)
    }while (quizIndex == random)

    // actualizar el índice de la pregunta actual
    quizIndex = random  

    // actualizar la pregunta actual
    let preguntaActual = quiz[quizIndex]
    document.querySelector('#question').innerHTML = preguntaActual.pregunta

    // actualizar las respuestas
    document.querySelector('#answer1').innerHTML = preguntaActual.respuestas[0]
    document.querySelector('#answer2').innerHTML = preguntaActual.respuestas[1]
    document.querySelector('#answer3').innerHTML = preguntaActual.respuestas[2]
    document.querySelector('#answer4').innerHTML = preguntaActual.respuestas[3]

    // Ocultamos el resultado cuando se carga una nueva pregunta
    document.querySelector('#result').style.display = "none"
    //actualizar la variable nueva para que se pueda responder a las siguintes
    nueva = false
}

cargarPregunta()

//funcion para verificar la respuesta, declaramos indiceRespuesta para recoger los datos


// mover el jugador a la nueva casilla
function moverJugador() {
    // seleccionar y eliminar la clase div-point de la casilla actual
    let casillaActual = document.querySelector('.div-point')
    casillaActual.classList.remove('div-point')

    // seleccionar la nueva casilla referida por divpoint
    let nuevaCasilla = document.querySelectorAll('.div')[divpoint - 1]
    nuevaCasilla.classList.add('div-point')
}

function verificarRespuesta(indiceRespuesta) {
    console.log("comprobar indiceRespuesta", indiceRespuesta)
    //si el indiceRespuesta es igual al numero correcto, se suma 1 a correctas, 1 a divpoint y sale que es correcto
    if (indiceRespuesta == quiz[quizIndex].correcta) {
        correctas++
        divpoint++
        document.querySelector('#result').style.display = "block"
        document.querySelector('#result').innerHTML = "Correcto"
        //en caso de else se suma 1 a incorrectas, resta 3 de divpoint pero con el "1" aseguramos de que no sea menor que 1 , sale que es incorrecto
    }else {
        incorrectas++
        divpoint = Math.max(divpoint - 3, 1)
        document.querySelector('#result').style.display = "block"
        document.querySelector('#result').innerHTML = "Incorrecto"
    }
    console.log(divpoint)
    moverJugador()
}

// asociar botones de respuestas a verificarRespuesta
document.querySelector('#answer1').addEventListener('click', function() {
    if(nueva==false){
        moverJugador()
        verificarRespuesta(0)
    }
    nueva = true
})
document.querySelector('#answer2').addEventListener('click', function() {
    if(nueva==false){
        moverJugador()
        verificarRespuesta(1)
    }
    nueva = true
})
document.querySelector('#answer3').addEventListener('click', function() {
    if(nueva==false){
        moverJugador()
        verificarRespuesta(2)
    }
    nueva = true
})
document.querySelector('#answer4').addEventListener('click', function() {
    if(nueva==false){
        moverJugador()
        verificarRespuesta(3)
    }
    nueva = true
})

// cambiar a la siguiente pregunta
document.querySelector('#next-question').addEventListener('click', function() {
    if(divpoint >= 20){
        document.querySelector('#result').style.display = "none"
        document.querySelector('#quiz').style.display = "none"
        document.querySelector('.text-center').innerHTML = "Quiz finalizado!"
        console.log("Has llegado a la casilla 20! Tienes: ", correctas, " Correctas y ", incorrectas, " Incorrectas")

    }else{
        cargarPregunta()
    }
})