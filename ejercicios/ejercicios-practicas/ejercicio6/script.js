//ejercicio 1
document.getElementById('btnEnviar').addEventListener('click', function(){
    let minimoRandom = parseInt(document.getElementById("num1").value);
    let maximoRandom = parseInt(document.getElementById("num2").value);

    aleatorio = Math.floor(Math.random()* (maximoRandom - minimoRandom + 1) + minimoRandom);

    document.getElementById("numeroAleatorio").innerText = "El numero random de " + minimoRandom + " y " + maximoRandom + " es: " + aleatorio;
}); 



