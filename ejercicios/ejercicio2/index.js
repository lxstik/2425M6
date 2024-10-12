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

let quizHtml = ''

for(let i = 0; i < quiz.length; i++) {
    
    quizHtml += `<h2>${quiz[i].pregunta}</h2>`
    
    for(let y= 0; y < quiz[i].respuestas.length; y++){
        quizHtml += `<button>${quiz[i].respuestas[y]}</button>`
    }
}
/*
for(let y = 0; y < quiz[i].respuestas.length; y++) {
    quizHtml += `<button>${quiz[i].respuestas[y]}</button>`
}*/
document.querySelector('#cuestionario').innerHTML = quizHtml