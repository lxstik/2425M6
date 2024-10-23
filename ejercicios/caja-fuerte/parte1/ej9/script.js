var numero1 = 5;
var numero2 = 11;

var suma = numero1 + numero2;

botonSuma = document.getElementById('botonSuma');
resultado = document.getElementById('resultat');

botonSuma.addEventListener('click', function() {
    resultado.innerHTML = "El resultado de suma de " + numero1 + " y " + numero2 + " es " + suma;
});