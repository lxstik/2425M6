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
        respuestas : ["/* Comentario */", "// Comentario", '!Comentario¡', "# Comentario"],
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

console.log('aaaa')
let quizIndex = Math.floor(Math.random() * 10);  // asignar quizIndex con un valor aleatorio

function cargarPregunta() {
    let random

    //generar un nuevo numero aleatorio que no sea igual al anterior
    do {
        random = Math.floor(Math.random() * 10)
    } while (quizIndex == random)

    quizIndex = random;  // actualizar la variable con el nuevo valor

    console.log(quizIndex)
    let preguntaActual = quiz[quizIndex]

    // Actualizamos la pregunta
    document.querySelector('#question').innerHTML = preguntaActual.pregunta

    // Actualizamos las respuestas
    document.querySelector('#answer1').innerHTML = preguntaActual.respuestas[0]
    document.querySelector('#answer2').innerHTML = preguntaActual.respuestas[1]
    document.querySelector('#answer3').innerHTML = preguntaActual.respuestas[2]
    document.querySelector('#answer4').innerHTML = preguntaActual.respuestas[3]

    // Ocultamos el resultado cuando se carga una nueva pregunta
    document.querySelector('#result').style.display = "none"
}

// cargar la primera pregunta al cargar la pagina
cargarPregunta()


//cambiar a la siguiente pregunta
//cuando clicamos a siguiente pregunta arranca la funcion
document.querySelector('#next-question').addEventListener('click', function() {
    cargarPregunta()
})


//funcion de comprobación de las respuestas
function verificarRespuesta(indiceRespuesta) {
    if (indiceRespuesta == quiz[quizIndex].correcta) {
        document.querySelector('#result').style.display = "block"
        document.querySelector('#result').innerHTML = "Correcto"
    } else {
        document.querySelector('#result').style.display = "block"
        document.querySelector('#result').innerHTML = "Incorrecto"
    }
}



//clicando a las opciones:
document.querySelector('#answer1').addEventListener('click', function () {
    verificarRespuesta(0)
});

document.querySelector('#answer2').addEventListener('click', function () {
    verificarRespuesta(1)
});

document.querySelector('#answer3').addEventListener('click', function () {
    verificarRespuesta(2)
});

document.querySelector('#answer4').addEventListener('click', function () {
    verificarRespuesta(3)
});