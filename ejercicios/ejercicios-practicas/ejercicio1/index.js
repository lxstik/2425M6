console.log("Calculadora funciona...");

//almacenar las variables
let entradaActual = ''
let resultado
let boton

//seleccinar la pantalla
const pantalla = document.getElementById('pantalla')

//capturar clicks
const botones = document.querySelectorAll('button')

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent

        // revisar con consola el boton clicado
        console.log("boton: " + valor)

        // comprobar el tipo del boton
        if(valor >= 0 && valor <= 9){
            entradaActual += valor
            pantalla.textContent = entradaActual

        }else if (valor == '+' || valor == '-'){
            entradaActual += `${valor}`
            pantalla.textContent = entradaActual
        }else if(valor == '='){
            // calculos con eval

            try {
                resultado = eval(entradaActual)
                console.log("resultado: " + resultado)
                pantalla.textContent = resultado
                entradaActual = resultado.toString()

            }catch(error){
                console.error("hubo un error al hacer el calculo: " + error)
                pantalla.textContent = "Error 404"

            }

        }else if(valor == 'C') {
            // limpiar la pantalla
            entradaActual = ''
            resultado = ''
            pantalla.textContent = 0
        }
    })
})
