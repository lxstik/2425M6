var PreguntasRespuestas = [
    ["Cual es la capital de Francia?", "Paris"],
    ["Cual es el oceano mas grande en todo el mundo?","Oceano pacifico"],
];

var PrimeraPregunta = PreguntasRespuestas[0][0];
var PrimeraRespuesta = PreguntasRespuestas[0][1];

document.getElementById('pregunta').textContent = "Pregunta: " + PrimeraPregunta;
document.getElementById('resposta').textContent = "Respuesta: " + PrimeraRespuesta;
