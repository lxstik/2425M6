console.log("Calculadora inicialitzada!");

//almacenar las variables
let entradaActual = ''; 
let resultado = null;

//Seleccionar la pantalla
const pantalla = document.getElementById('pantalla');

//Capturar clics en botones
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        // Mostrar a la consola el valor del botó clicat
        console.log("Botó clicat: " + valor);

        // Comprovem quin tipus de botó és
        if (valor >= '0' && valor <= '9') {
            // 3. Mostrar números a la pantalla
            entradaActual += valor;
            pantalla.textContent = entradaActual;

        } else if (valor == '+' || valor == '-') {
            // 4. Afegir operadors
            entradaActual += ` ${valor} `;
            pantalla.textContent = entradaActual;

        } else if (valor === '=') {
            // calculos con eval
            try {
                
                resultado = eval(entradaActual);
                console.log("Resultat: " + resultado);
                pantalla.textContent = resultado;
                entradaActual = resultado.toString();

            } catch (error) {

                console.error("Error en el calculo: " + error);
                pantalla.textContent = "Error";

            }

        } else if (valor === 'C') {
            // 6. Netejar la pantalla
            entradaActual = '';
            resultat = null;
            pantalla.textContent = '0';
        }
    });
});
