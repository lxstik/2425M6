    //ejercicio 1
document.getElementById('btnEnviar').addEventListener('click', function(){
    let minimoRandom = parseInt(document.getElementById("num1").value);
    let maximoRandom = parseInt(document.getElementById("num2").value);

    aleatorio = Math.floor(Math.random()* (maximoRandom - minimoRandom + 1) + minimoRandom);

    document.getElementById("numeroAleatorio").innerText = "El numero random de " + minimoRandom + " y " + maximoRandom + " es: " + aleatorio;
}); 

    //ejercicio 2

//mayus y minus
document.getElementById('convertirMayus').addEventListener('click', function() {
    texto = document.getElementById('texto');
    texto.value = texto.value.toUpperCase();
});

document.getElementById('convertirMinus').addEventListener('click', function() {
    texto = document.getElementById('texto');
    texto.value = texto.value.toLowerCase(); 
});

//buscar

document.getElementById('buscarPalab').addEventListener('click', function(){
    texto2 = document.querySelector('input#buscarInput');
    texto2 = texto2.trim()
})